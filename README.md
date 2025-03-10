## Node.js API with Authentication and User Management

## Technologies Used

- Node.js: Server-side JavaScript runtime.
- Express: Web framework for Node.js, used to create the API.
- MongoDB: NoSQL database to store user data.
- Mongoose: ODM (Object Data Modeling) to interact with MongoDB.
- JSON Web Tokens (JWT): For authentication and authorization.
- bcrypt: For password encryption.
- Joi: For data validation.
- dotenv: For managing environment variables.
- crypto-random-string: For generating secure random strings.
- nodemon: For automatically restarting the server during development.

## Configuration

Clone the repository:

# Bash

---

git clone <REPOSITORY_URL>
cd <REPOSITORY_NAME>

- Install the dependencies:

## npm install

---

## Configure the environment variables:

## Create a .env file in the root of the project and add the following variables:

## PORT=3000

## MONGODB_URI=<YOUR_MONGODB_URI>

## JWT_SECRET=<A_SECRET_KEY_FOR_THE_JWT>

- Replace <YOUR_MONGODB_URI> with the connection URI of your MongoDB database and <A_SECRET_KEY_FOR_THE_JWT> with a secure secret key for the JWT.

---

## Running the Project

- To start the server in development mode, use the following command:

## npm run dev

- To start the server in production mode, use:

## npm start

---

## Project Structure

├── node_modules/ # Project dependencies
├── src/
│ ├── Controllers/ # Route control logic
│ │ └── UsersController.js
│ ├── loaders/ # Configurations and initializations
│ │ ├── index.js
│ │ └── mongodb.js
│ ├── Middlewares/ # Middleware functions for authentication and validation
│ │ ├── validateRequest.js
│ │ └── verifyToken.js
│ ├── Models/ # Data model definitions
│ │ └── UsersModels.js
│ ├── services/ # Business logic
│ │ └── passwordService.js
│ ├── utils/ # Utility functions
│ │ ├── errorResponse.js
│ │ └── secretKey.js
│ ├── validators/ # Joi validation schemas
│ │ └── test.js
│ ├── app.js # Express configuration
│ ├── routes.js # API route definitions
│ └── server.js # Server initialization
├── .env # Environment variables
├── package-lock.json # Dependency version control
├── package.json # Project metadata and dependencies
└── README.md # Project documentation

---
