import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";
import "../styles/home.css";

const Home = () => {
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <div className="animated-background">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <div className="home-container">
        <div className="header-container">
          <h1 className="home-title">Welcome, {username}!</h1>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="feature-description">
          <span className="feature-tag">Organized</span>
          <span className="feature-tag">Simple</span>
          <span className="feature-tag">Beautiful</span>
          <p className="feature-text">
            Your personal task manager designed to make productivity beautiful. Create, track, and complete tasks with style.
          </p>
        </div>
        
        <TaskInput />
        <TaskList />
      </div>
    </>
  );
};

export default Home;
