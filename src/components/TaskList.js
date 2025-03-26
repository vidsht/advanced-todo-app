import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, editTask, deleteTask, completeAllTasks, toggleTaskComplete } from "../redux/taskSlice";
import "../styles/TaskList.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const handleEdit = (index, currentText, currentDescription) => {
    setEditingIndex(index);
    setEditedText(currentText);
    setEditedDescription(currentDescription || "");
  };

  const handleSaveEdit = (index) => {
    dispatch(editTask({ 
      index, 
      updatedTask: { 
        text: editedText, 
        description: editedDescription,
        timestamp: tasks[index].timestamp, // Preserve existing timestamp
        attachment: tasks[index].attachment, 
        completed: tasks[index].completed
      } 
    }));
    setEditingIndex(null);
  };

  const handleCompleteAll = () => {
    dispatch(completeAllTasks());
  };

  return (
    <div className="task-container">
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
            {editingIndex === index ? (
              <div className="edit-container">
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="edit-input"
                />
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  className="edit-input description"
                  placeholder="Task description..."
                />
                <div className="task-buttons">
                  <button className="save" onClick={() => handleSaveEdit(index)}>Save</button>
                  <button className="edit" onClick={() => setEditingIndex(null)}>Cancel</button>
                </div>
              </div>
            ) : (
              <div className="task-content">
                <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                  {task.text}
                </span>
                {task.description && (
                  <p className={`task-description ${task.completed ? 'completed' : ''}`}>
                    {task.description}
                  </p>
                )}
                {task.attachment && (
                  <div className="task-attachment">
                    <img src={task.attachment} alt="Task attachment" />
                  </div>
                )}
                <div className="task-footer">
                  <span className="task-timestamp">{task.timestamp}</span>
                  <div className="task-buttons">
                    <button 
                      className={`complete ${task.completed ? 'completed' : ''}`} 
                      onClick={() => dispatch(toggleTaskComplete(index))}
                    >
                      {task.completed ? 'Completed' : 'Complete'}
                    </button>
                    <button className="edit" onClick={() => handleEdit(index, task.text, task.description)}>Edit</button>
                    <button className="delete" onClick={() => dispatch(removeTask(index))}>Delete</button>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      {tasks.length > 0 && (
        <div className="bottom-actions">
          <button className="delete-all" onClick={() => dispatch(deleteTask())}>Delete All</button>
          <button className="complete-all" onClick={handleCompleteAll}>Mark All Complete</button>
        </div>
      )}
    </div>
  );
};

export default TaskList;
