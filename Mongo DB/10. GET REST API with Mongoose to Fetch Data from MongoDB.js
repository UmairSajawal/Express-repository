// ******* 10. GET REST API with Mongoose to Fetch Data from MongoDB ********

// 1. First create two folders name schema and model
// 2. Now create studentSchema.js file in schema folder
// 3. And studentModel.js in model folder

import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";// .js is necessary to write after path

const app = express();

await mongoose.connect("mongodb://localhost:27017/college").then(()=>{
    console.log("_____Connected_____")
})

app.get("/", async (req, resp)=>{
    const studentData = await studentModel.find()
    resp.send(studentData);
})

app.listen(3200)