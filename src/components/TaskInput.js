import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { uploadFileToCloudinary } from "../services/cloudinaryService";

const TaskInput = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      setUploading(true);
      let attachmentUrl = null;
      
      if (file) {
        attachmentUrl = await uploadFileToCloudinary(file);
      }

      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const formattedDate = `${date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })} ${hours}:00`;

      dispatch(addTask({ 
        text: taskTitle,
        description: taskDescription,
        timestamp: formattedDate,
        completed: false,
        attachment: attachmentUrl
      }));

      setTaskTitle("");
      setTaskDescription("");
      setFile(null);
      setUploading(false);
    }
  };

  return (
    <div className="task-input-container">
      <form onSubmit={handleSubmit}>
        <div className="input-fields">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Task title..."
            className="task-input"
          />
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Task description..."
            className="task-input description"
          />
          <div className="file-upload">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="file-input"
              accept="image/*"
            />
            {file && <span className="file-name">{file.name}</span>}
          </div>
        </div>
        <div className="button-container">
          <button type="submit" className="add-button" disabled={uploading}>
            {uploading ? "Uploading..." : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskInput;
