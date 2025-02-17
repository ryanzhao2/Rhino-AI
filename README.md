# Rhino AI

Rhino AI is a chatbot application tailored for shopping, designed to provide users with personalized product recommendations, price comparisons, and site suggestions. In addition to enhancing the shopping experience, it also supports creative and productive tasks by offering coding assistance, image analysis, and chat management features.

Inspired by Safak: https://github.com/safak/chatgpt-clone

> **Note**: This project is still in development. Features and functionalities may change as work continues.

## Features

- **Chat Management**: Create, view, and manage chats seamlessly.
- **Image Analysis**: Upload and analyze images for insights and feedback.
- **Code Assistance**: Get help with coding tasks and debugging.
- **User Authentication**: Secure user authentication powered by Clerk.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: Built with React, Vite, and React Router for a dynamic user experience.
- **Backend**: Node.js and Express for a robust server-side architecture.
- **Database**: MongoDB for efficient data storage and retrieval.
- **Authentication**: Clerk for secure user management.
- **Image Processing**: ImageKit for real-time image optimization and management.
- **AI Integration**: Google Generative AI for enhanced interactivity and responses.
- **Deployment**: Hosted on AWS and managed through CloudPanel for reliable performance.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v14 or higher
- **npm**: v6 or higher
- **MongoDB**: Ensure MongoDB is installed and running on your machine, or you have access to a MongoDB server.

### Steps to Install

1. **Clone the Repository**: Start by cloning the Rhino AI repository from GitHub.

   ```bash
   git clone https://github.com/ryanzhao2/Rhino-AI.git
   cd Rhino-AI
   ```

2. **Install Dependencies**: Navigate to both the `backend` and `client` directories and install the necessary dependencies.

   ```bash
   # For the backend
   cd backend
   npm install

   # For the client
   cd ../client
   npm install
   ```

3. **Set Up Environment Variables**: Create a `.env` file in the `backend` directory. You can use the example provided below (make sure to replace placeholders with your actual credentials):

   ```env
   MONGODB_URI=mongodb://<username>:<password>@localhost:27017/rhinoai
   CLERK_API_KEY=<your_clerk_api_key>
   CLERK_FRONTEND_API=<your_clerk_frontend_api>
   PORT=5000
   ```

4. **Start the Backend**: Open a terminal in the `backend` directory and start the server.

   ```bash
   npm start
   ```

5. **Start the Client**: In a new terminal, navigate to the `client` directory and start the React application.

   ```bash
   npm run dev
   ```

6. **Access the Application**: Open your web browser and navigate to `http://localhost:3000` to use the application.
