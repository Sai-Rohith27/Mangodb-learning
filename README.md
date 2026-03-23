MongoDB CRUD Operations using Mongoose

This project demonstrates basic MongoDB CRUD operations using Mongoose in a Node.js environment. It includes connecting to MongoDB, creating schemas and models, inserting multiple documents, and querying data.

Technologies Used

Node.js
MongoDB
Mongoose
JavaScript

MongoDB Connection

The database connection is established using Mongoose by connecting to a local MongoDB database named college.
Schema and Model

A schema is created to define the structure of the user data with fields like name, email, and age. The name field is unique to prevent duplicate users.
Insert Operation
Multiple users are inserted into the database using the insertMany() method.

Find Operation
Users are retrieved using a condition that finds users whose age is greater than or equal to 90.

Update Operation
The updateOne() method is used to update an existing user’s age.

Delete Operation
The deleteOne() method removes a user document from the database.

What I Learned

Connecting MongoDB using Mongoose
Creating schemas and models
Performing CRUD operations
Using MongoDB query operators
Handling database operations with async/await

Implemented Schema Validations and erros hadlinngs
