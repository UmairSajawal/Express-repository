// ******* 5. Make POST Method REST API with Node.js & MongoDB *******

import express from 'express';
import { MongoClient } from 'mongodb';

const dbName = "college"
const url = "mongodb://localhost:27017"  // mongodb default url
const client = new MongoClient(url)

const app = express();
app.use(express.urlencoded({extended:true})); // to get form data in req.body
app.use(express.json()); // to get json data in req.body
app.set("view engine",'ejs')  // use for display ui data not for api data
client.connect().then((connection)=>{
    const db = connection.db(dbName)
    app.get("/api", async(req, resp)=>{
        const collection = db.collection("students")
        const students = await collection.find().toArray();
        resp.send(students)
    })
    app.get("/ui", async(req, resp)=>{
        const collection = db.collection("students")
        const students = await collection.find().toArray();
        resp.render('students', {students})
    })
    app.get("/add", (req, resp)=>{
        resp.render('add-student')
    })
    app.post("/add-student", async(req, resp)=>{
        //console.log(req.body);
        const collection = db.collection("students")
        const result = await collection.insertOne(req.body)
        console.log(result);
        
        resp.send("Student Saved Successfully")
    })

    // POST Method REST API, use this api in front-end or mobile app to save data in db
    // use thunder client, on thunder client write path: http://localhost:3300/add-student-api and select post method and in body select json and write data in json format and click on send button
    
    app.post("/add-student-api", async (req, resp)=>{
        //console.log(req.body);
        // Apply condition that user must fill all fields
        const {name, age, email} = req.body  // fetch name, age, email from req.body
        if(!name || !age || !email){
            resp.send({message: "All fields are required", success: false})
            return false;
        }
        const collection = db.collection("students")
        const result = await collection.insertOne(req.body)
        console.log(result);
        
        resp.send({message: "Data Stored", success: true, result: result})
    })

})

app.listen(3300);
// route to check ui or table data on output: http://localhost:3300/ui
// route to check api data on output: http://localhost:3300/api

// views>add-student.ejs file code:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Student</title>
</head>
<body>
    <form action="add-student" method="post">
        <input name="name" placeholder="Enter Name"/><br/><br/>
        <input name="age" placeholder="Enter Age"/><br/><br/>
        <input name="email" placeholder="Enter Email"/><br/><br/>
        <button>Add New Student</button>
    </form>
</body>
</html>
*/



// Note: Make views name folder for ejs file and make students name file
// students.ejs file code:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Data will be here</h1>
    <table border="1">
        <tr>
            <td>name</td>
            <td>age</td>
            <td>password</td>
        </tr>
<% students.forEach(student=>{ %>
        <tr>
            <td><%= student.name %></td>
            <td><%= student.age %></td>
            <td><%= student.email %></td>
        </tr>
<% }) %>
    </table>
</body>
</html>
*/
