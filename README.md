Blog RESTful API with Node.js

This repository contains a robust and scalable RESTful API for a blog, built using Node.js.

Features
CRUD operations for posts: Create, read, update, and delete blog posts.

User management: Create and delete user accounts.

Authentication: Secure access to protected routes using JSON Web Tokens (JWTs).

Database integration: Supports both MySQL and PostgreSQL databases through Sequelize ORM.

Scalability: Built with Node.js for efficient handling of multiple requests.

Dependencies
bcryptjs: Secure password hashing.
body-parser: Parsing incoming request bodies.
dotenv: Loading environment variables.
express: Fast and unopinionated web framework for Node.js.
fastest-validator: Efficient data validation.
jsonwebtoken: Creating and verifying JWTs.
multer: Handling multipart/form-data for file uploads.
mysql2: MySQL database driver.
pg: PostgreSQL database driver.
sequelize: Powerful ORM for Node.js.

Development Dependencies
nodemon: ^3.0.3

API Endpoints
POST /posts: Create a new blog post.
PUT /posts/:id: Update a blog post by ID.
DELETE /posts/:id: Delete a blog post by ID.
GET /posts/:id: Retrieve a blog post by ID.
POST /users: Create a new user.
DELETE /users/:id: Delete a user by ID.

Contact
Joshua Radula 
radulajoshua@gmail.com
Happy blogging!
