# Plan AI App

## Project Overview
Plan AI is a mobile application that helps users organize events and activities together. It uses AI to assist in planning and provides real-time chat functionality.

## Current Project Status
- Basic project structure set up
- Backend and frontend initialized
- User authentication implemented
- Basic chat functionality in place
- Integration with Anthropic API for AI responses
- Integration with ChatGPT API for internet searches

## Tech Stack
- Frontend: React Native
- Backend: Node.js with Express
- Database: PostgreSQL with Sequelize ORM
- Real-time Communication: Socket.io
- AI Integration: Anthropic API and OpenAI API

## Setup Instructions
1. Clone the repository
2. Set up the backend:
   cd backend
   npm install
3. Set up the frontend:
   cd PlanAiApp
   npm install
4. Create a .env file in the backend directory with the following:
   ANTHROPIC_API_KEY= Ask user for API keys
   OPENAI_API_KEY=

## Running the App
1. Start the backend server:
   cd backend
   node server.js
2. Start the React Native app:
   cd PlanAiApp
   npx react-native run-android

## Completed Features
- User registration and login
- Real-time chat functionality
- AI-powered responses using Anthropic API
- Internet search functionality using ChatGPT API

## Next Steps
- Implement core AI planning features
- Enhance the chat interface (group chats, threading)
- Develop additional screens (user profile, settings, event management)
- Improve authentication and security
- Optimize performance
- Enhance error handling and user feedback
- Implement push notifications
- Add comprehensive testing
- Prepare for deployment
- Polish UI/UX
- Create documentation

## Contributing
[Add contribution guidelines here]

## License
[Add license information here]
