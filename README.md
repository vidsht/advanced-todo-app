# TaskFlow - Advanced Todo App

TaskFlow is a modern and efficient personal task manager built using React and Redux. It features a sleek, responsive UI with animated backgrounds, allowing users to create, manage, and complete tasks effortlessly.

## Features

- **User Authentication:** Simple username-based login powered by Redux ([`authSlice`](src/redux/authSlice.js)).
- **Task Management:** Easily add, edit, delete, and mark tasks as completed, with persistence in local storage via Redux ([`taskSlice`](src/redux/taskSlice.js)).
- **File Uploads:** Attach images to tasks using Cloudinary integration ([`uploadFileToCloudinary`](src/services/cloudinaryService.js)).
- **Responsive UI:** Enjoy a well-organized and visually appealing interface on any device, thanks to custom CSS ([`home.css`](src/styles/home.css), [`login.css`](src/styles/login.css), [`TaskList.css`](src/styles/TaskList.css)).
- **Seamless Navigation:** React Router ensures smooth navigation and authentication-based route protection.

## Setup & Installation

1. **Clone the Repository**

   ```sh
   git clone <repository-url>
   cd advanced-todo-app
   ```

2. **Install Dependencies**
   
   ```sh
   npm install
   ```

3. **Run the Application**
   
   ```sh
   npm start
   ```
   Open http://localhost:3000 in your browser. The page reloads automatically upon code changes.

4. **Run Tests**
   
   ```sh
   npm test
   ```

5. **Build for Production**
   
   ```sh
   npm run build
   ```

## Screenshots

- **Login Page:** A simple yet elegant login interface with an animated background.
![Screenshot 2025-03-26 173904](https://github.com/user-attachments/assets/71a15261-a498-443f-ba84-a9f0a270f6b5)

- **Dashboard:** Displays task input functionality and task lists.
![Screenshot 2025-03-26 173948](https://github.com/user-attachments/assets/3b30e767-c058-4000-bf1d-b4ec8b83734f)

- **Task Details:** Tasks include descriptions, completion status, and optional attachments.
![Screenshot 2025-03-26 174530](https://github.com/user-attachments/assets/7ddc3d1c-6c89-4013-8614-6764c9724695)


## Detailed Overview

### Authentication Flow
The login page (`Login.js`) allows users to enter a valid username. Upon submission, the login action is dispatched, and the user is redirected to the home page (`Home.js`).

### Task Input & Management
The task input form (`TaskInput.js`) lets users add a title and description and optionally attach an image. The timestamp is formatted and stored via the `addTask` action.

### Task List Functionality
Tasks are displayed in an interactive list (`TaskList.js`). Users can edit tasks inline, mark them complete, or delete them. All state updates are efficiently managed by Redux.

### State Management & Persistence
The Redux store (`store.js`) integrates both the authentication and task management slices, ensuring data persists in local storage across user sessions.

---

Enjoy using TaskFlow to enhance your productivity!

