// ****** 9. Connect Node.js with MongoDB Using Mongoose ******

// Installation guides:
// Firstly creates a new folder for your project and navigate to that folder in terminal. Then follow the steps below:
// 1. In terminal, run: npm init -y   this will create a package.json file
// 2. In terminal, run: npm install mongoose   this will install the mongoose package and add it to the dependencies in package.json
// 3. Make sure to set "type": "module" in the nearest package.json file.
// 4. create index.js file.


// use index.js file name to write the code to connect to MongoDB using Mongoose

import mongoose from "mongoose";

// Connect to MongoDB
async function dbConnection() {
    await mongoose.connect("mongodb://localhost:27017/college");
    const schema = mongoose.Schema({
        name: String,
        age: Number,
        email: String,
    });

    const studentsModel = mongoose.model("students", schema);
    const result = await studentsModel.find();
    console.log(result);
}

dbConnection();