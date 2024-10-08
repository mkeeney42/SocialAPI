# Social API

## Description
This project is a Social Network API designed to facilitate interactions among users, allowing them to share thoughts, react to friends' thoughts, and manage friendships. Built with Express.js and MongoDB, the API supports various functionalities essential for a social networking platform, including user management, thought sharing, and reaction handling.

## Technologies Used
Node.js: For building the server-side application.
Express.js: For routing and handling requests.
MongoDB: NoSQL database to store user and thought data.
Mongoose: ODM library for MongoDB to manage schema and data modeling.
User Story
md
Copy code
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
Acceptance Criteria
The API meets the following criteria:

Starts the server and syncs Mongoose models to MongoDB.
Supports GET routes for users and thoughts, returning data in formatted JSON.
Supports POST, PUT, and DELETE routes to manage users and thoughts.
Allows creating and deleting reactions to thoughts and managing friends.
Getting Started
Prerequisites
Ensure you have MongoDB installed and running on your machine.
Install Node.js if you haven’t already.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/social-network-api.git
cd social-network-api
Install the required packages:

bash
Copy code
npm install
Start MongoDB if it's not already running:

bash
Copy code
mongod
Start the server:

bash
Copy code
npm start
Use Insomnia or any API client to test the routes.

### API Routes
Users
GET /api/users: Retrieve all users.
GET /api/users/:id: Retrieve a single user by their ID.
POST /api/users: Create a new user.
PUT /api/users/:id: Update an existing user.
DELETE /api/users/:id: Delete a user and their associated thoughts (bonus).
Thoughts
GET /api/thoughts: Retrieve all thoughts.
GET /api/thoughts/:id: Retrieve a single thought by its ID.
POST /api/thoughts: Create a new thought.
PUT /api/thoughts/:id: Update an existing thought.
DELETE /api/thoughts/:id: Delete a thought.
Reactions
POST /api/thoughts/:thoughtId/reactions: Create a reaction for a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.
Mock Up

## Walkthrough Video
A detailed walkthrough video demonstrating the application's functionality can be found here.

## Future Enhancements
Implement authentication and authorization for user actions.
Add more detailed user profiles with additional features.
Enhance error handling and validation for API inputs.

## License
This project is open-source and available under the MIT License.