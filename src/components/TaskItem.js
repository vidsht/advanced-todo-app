import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, deleteTask } from "../redux/taskSlice";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, updatedTask: { ...task, text: newTitle } }));
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      <div className="task-content">
        {isEditing ? (
          <div className="edit-container">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="edit-input"
            />
            <div className="task-buttons">
              <button className="save" onClick={handleEdit}>
                Save
              </button>
              <button className="edit" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <span className="task-text">{task.text}</span>
            {task.attachment && (
              <a href={task.attachment} target="_blank" rel="noopener noreferrer">
                View Attachment
              </a>
            )}
            <div className="task-buttons">
              <button className="edit" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <button className="delete" onClick={() => dispatch(deleteTask(task.id))}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
