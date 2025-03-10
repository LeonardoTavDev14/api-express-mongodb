## **Node.js API with Authentication and User Management**
This repository contains the source code for a RESTful API built with Node.js, Express, MongoDB and other libraries for user management and authentication.



---

## **Technologies Used**
* Node.js: Server-side JavaScript execution environment
* Express: Web framework for Node.js, used to create the API.
* MongoDB: NoSQL database for storing user data.
* Mongoose: ODM (Object Data Modeling) to interact with MongoDB.
* JSON Web Tokens (JWT): For authentication and authorization.
* bcrypt: For password encryption.
* Joi: For data validation.
* dotenv: For managing environment variables.
* crypto-random-string: To generate secure random strings.
* nodemon: To restart the server automatically during development.


---

## **Configuration**
* Clone the repository:
```
git clone <URL_REPOSITORY>
cd <REPOSITORY_NAME>
```
* Install the dependencies:
```
npm install
```
* Set the environment variables:
* Create an .env file in the root of the project and add the following variables:
```
PORT=3000
MONGODB_URI=<YOUR_MONGODB_URI>
JWT_SECRET=<A_SECRET_KEY_FOR_THE_JWT>
```
Replace <SUA_URI_DO_MONGODB> with the connection URI of your MongoDB database and <UMA_CHAVE_SECRETA_PARA_O_JWT> with a secure secret key for the JWT.

---
## **Running the Project**
To start the server in development mode, use the following command:
```
npm run dev
```
To start the server in production mode, use:
```
npm start
```

---

## **API routes**
**Authentication routes
* POST /register: Registers a new user.
* POST /login: Authenticates a user and returns a JWT token.

## **User routes**
* GET /users/id: Returns the authenticated user's data.
* PUT /users/id: Updates the authenticated user's data.
* DELETE /users/id: Deletes the authenticated user.

## **Middlewares**
* validateRequest: Validates the request data using Joi.
* verifyToken: Checks the validity of the JWT token and authenticates the user.

## **Models**
* UsersModels: Defines the user model schema in MongoDB.

## **Services**
* PasswordService: Contains the logic for encrypting and comparing passwords.

## **Validations**
* test: Validation scheme for tests.

## **Utilities**
* errorResponse: Function for formatting error responses.
* secretKey: Management of the JWT secret key.


---

## **Contributions**
* StackOverflow
* W3SCHOOL


---
