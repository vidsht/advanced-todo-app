import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice";
import "../styles/login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            dispatch(login(username));
            navigate("/home"); 
        } else {
            alert("Please enter a valid username!");
        }
    };

    return (
        <div className="login-container">
            <div className="animated-background">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
            <h1 className="login-title">TaskFlow</h1>
            <p className="login-subtitle">Welcome back! Please enter your name to continue</p>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your name..."
                    className="login-input"
                    required
                />
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
