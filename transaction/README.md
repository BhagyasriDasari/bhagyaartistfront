# Transactions Management System

## Overview

This project is a web application for managing daily transactions. The system allows users to track and manage their debit and credit transactions, providing a comprehensive view of their financial activities. The application is built using React.js for the frontend and Node.js with SQLite for the backend.

## Features

- **Add Transaction**: Easily add new debit and credit transactions with details such as date, amount, and description.
- **View Transactions**: Display a list of all transactions with the ability to filter by date, type, and other criteria.
- **Transaction Details**: View detailed information about each transaction, including the remaining balance after each transaction.
- **Edit and Delete Transactions**: Modify or remove existing transactions as needed.
- **Responsive Design**: Fully responsive design that works on various devices.

## Technologies Used

- **React.js**: For building the user interface.
- **React Router**: For navigation between different components.
- **Axios**: For making API requests to the backend service.
- **CSS Modules**: For component-level styling.
- **Node.js**: For backend services.
- **Express.js**: For building the backend API.
- **SQLite**: For database management.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repository:

    ```sh
    git clone <remote-repo-url>
    cd transactions-frontend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Navigate to the backend directory and install backend dependencies:

    ```sh
    cd ../backend
    npm install
    ```

### Running the Application

#### Start the Backend

1. Navigate to the backend directory:

    ```sh
    cd backend
    ```

2. Start the backend server:

    ```sh
    npm start
    ```

#### Start the Frontend

1. Navigate to the frontend directory:

    ```sh
    cd ../transactions
    ```

2. Start the frontend application:

    ```sh
    npm start
    ```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the frontend application for production, run:

```sh
npm run build