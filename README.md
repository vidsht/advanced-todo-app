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
![image](https://github.com/user-attachments/assets/5c1a4c6e-075a-4346-99cb-8cb4b5796121)

- **Dashboard:** Displays task input functionality and task lists.
![image](https://github.com/user-attachments/assets/315f7369-2dca-4168-a2a8-41e0137933c0)

- **Task Details:** Tasks include descriptions, completion status, and optional attachments.
![image](https://github.com/user-attachments/assets/9813fba5-8dda-47f7-b5ec-90a5bccbcec1)


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

<<<<<<< HEAD
### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 255a67b (Initialize project using Create React App)
=======
>>>>>>> a134d4c (Update README.md)
