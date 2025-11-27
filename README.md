# E-Courses Server

This is the backend server for the E-Courses application, built with Node.js, Express, and MongoDB. It provides various API endpoints to manage courses, user data, reviews, bookings, notes, and course materials.

## Features

*   **Course Management**: Create, read, update, and delete course information.
*   **User Management**: Handle user registration, roles, and profiles.
*   **Review System**: Manage course reviews.
*   **Session Bookings**: Allow users to book sessions.
*   **Personal Notes**: Users can create, read, update, and delete personal notes.
*   **Course Materials**: Manage materials associated with courses.

## API Endpoints

Below is a detailed explanation of the API endpoints, highlighting the CRUD operations.

### 1. Courses

*   **GET /course**
    *   **Description**: Retrieves all available courses.
    *   **Operation**: Read
*   **GET /courseDetails/:id**
    *   **Description**: Retrieves details for a specific course by its ID.
    *   **Operation**: Read
*   **POST /course**
    *   **Description**: Adds a new course to the database.
    *   **Operation**: Create
*   **GET /course/:email**
    *   **Description**: Retrieves courses associated with a specific tutor email.
    *   **Operation**: Read
*   **GET /course/email/:email?status=...**
    *   **Description**: Retrieves courses associated with a specific tutor email, with an optional filter by status.
    *   **Operation**: Read
*   **PATCH /sessions/status/:id**
    *   **Description**: Updates the status of a session (e.g., approved, rejected) and can include rejection reasons, feedback, or registration fees.
    *   **Operation**: Update
*   **DELETE /course/delete/:id**
    *   **Description**: Deletes a course by its ID.
    *   **Operation**: Delete

### 2. Reviews

*   **GET /reviews**
    *   **Description**: Retrieves all course reviews.
    *   **Operation**: Read

### 3. Users

*   **POST /users**
    *   **Description**: Registers a new user.
    *   **Operation**: Create
*   **GET /user/:email**
    *   **Description**: Retrieves user role by email.
    *   **Operation**: Read
*   **GET /users**
    *   **Description**: Retrieves all registered users.
    *   **Operation**: Read
*   **PATCH /users/:id**
    *   **Description**: Updates a user's role by their ID.
    *   **Operation**: Update

### 4. Bookings

*   **GET /bookedSession/:email**
    *   **Description**: Retrieves all sessions booked by a specific user email.
    *   **Operation**: Read
*   **POST /bookings**
    *   **Description**: Books a new session.
    *   **Operation**: Create

### 5. Notes

*   **POST /note**
    *   **Description**: Creates a new personal note for a user.
    *   **Operation**: Create
*   **GET /note/:email**
    *   **Description**: Retrieves all notes associated with a specific user email.
    *   **Operation**: Read
*   **DELETE /note/:id**
    *   **Description**: Deletes a personal note by its ID.
    *   **Operation**: Delete
*   **PUT /note/:id**
    *   **Description**: Updates an existing personal note by its ID.
    *   **Operation**: Update

### 6. Materials

*   **POST /materials**
    *   **Description**: Adds new course materials.
    *   **Operation**: Create
*   **GET /materials/:email**
    *   **Description**: Retrieves course materials uploaded by a specific tutor email.
    *   **Operation**: Read
*   **GET /materials**
    *   **Description**: Retrieves all course materials.
    *   **Operation**: Read
*   **DELETE /materials/:id**
    *   **Description**: Deletes course materials by their ID.
    *   **Operation**: Delete
*   **PATCH /materials/:id**
    *   **Description**: Updates existing course materials by their ID.
    *   **Operation**: Update

## Technologies Used

*   Node.js
*   Express.js
*   MongoDB (via `mongodb` driver)
*   Mongoose (Implicitly used for schema definition and validation)
*   CORS
*   Dotenv

## Setup Instructions

1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd e-courses-server
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Environment Variables**:
    Create a `.env` file in the root directory and add your MongoDB connection string and any other necessary environment variables:
    ```
    PORT=5000
    DB_USER=<your_db_user>
    DB_PASSWORD=<your_db_password>
    ```
4.  **Run the server**:
    ```bash
    npm start
    ```
    The server will start on the port specified in your `.env` file (default: 5000).