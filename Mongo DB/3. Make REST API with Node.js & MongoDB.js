// ******* 3. Make REST API with Node.js & MongoDB.js *******

import express from 'express';
import { MongoClient } from 'mongodb';

const dbName = "college"
const url = "mongodb://localhost:27017"  // mongodb default url
const client = new MongoClient(url)

const app = express();
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

})

app.listen(3300);
// route to check ui or table data on output: http://localhost:3300/ui

// route to check api data on output: http://localhost:3300/api

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
