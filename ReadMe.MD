# Social Network API
## Description
The Social Network API is a robust RESTful API designed for a social media web application. Built with Express.js and MongoDB, this API allows users to share thoughts, react to friends' thoughts, and maintain a friend list. The flexibility of
MongoDB with unstructured data makes it ideal for handling large volumes of user-generated content. This project serves as a foundational component for any social network application, providing essential functionality through a well-structured API.

## Table of Contents
Installation
Usage
API Routes
Walkthrough Video
License
Questions

## Installation
To set up the Social Network API on your local machine, follow these steps:
Clone the repository:
bash
Copy code
git clone <repository-url>
Navigate to the project directory:
bash
Copy code
cd <project-directory>
Install the required dependencies:
bash
Copy code
npm install
Ensure MongoDB is installed and running on your machine. Follow the MongoDB installation guide if necessary.

## Usage
To start the server, run the following command:
bash
Copy code
npm start
You can use Insomnia or a similar tool to interact with the API. The following routes are available for testing:

## API Routes
### Users: 

GET /api/users - Retrieve all users
GET /api/users/:id - Retrieve a single user by ID
POST /api/users - Create a new user
PUT /api/users/:id - Update a user by ID
DELETE /api/users/:id - Delete a user by ID
### Friends:

POST /api/users/:userId/friends/:friendId - Add a friend to a user's friend list
DELETE /api/users/:userId/friends/:friendId - Remove a friend from a user's friend list
### Thoughts:

GET /api/thoughts - Retrieve all thoughts
GET /api/thoughts/:id - Retrieve a single thought by ID
POST /api/thoughts - Create a new thought
PUT /api/thoughts/:id - Update a thought by ID
DELETE /api/thoughts/:id - Delete a thought by ID
### Reactions: 

POST /api/thoughts/:thoughtId/reactions - Create a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction from a thought
Walkthrough Video
For a complete demonstration of the Social Network API, check out the walkthrough video here.

## License
This project is licensed under the MIT License.

## Questions
If you have any questions or suggestions, feel free to reach out:
### GitHub: mkeeney42
### Email: mkeeney4202@gmail.com
