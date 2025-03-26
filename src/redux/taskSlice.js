import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ ...action.payload, completed: false });
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    addAttachment: (state, action) => {
      const { taskId, attachmentUrl } = action.payload;
      const task = state.find((task) => task.id === taskId);
      if (task) {
        task.attachment = attachmentUrl;
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
    removeTask: (state, action) => {
      const newState = state.filter((_, index) => index !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
    editTask: (state, action) => {
      const { index, updatedTask } = action.payload;
      if (state[index]) {
        state[index] = { ...updatedTask, completed: state[index].completed };
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
    deleteTask: (state) => {
      localStorage.setItem("tasks", JSON.stringify([]));
      return [];
    },
    completeAllTasks: (state) => {
      state.forEach((task) => {
        task.completed = true;
      });
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    toggleTaskComplete: (state, action) => {
      const index = action.payload;
      if (state[index]) {
        state[index].completed = !state[index].completed;
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
  },
});

export const {
  addTask,
  addAttachment,
  removeTask,
  editTask,
  deleteTask,
  completeAllTasks,
  toggleTaskComplete,
} = taskSlice.actions;
export default taskSlice.reducer;
