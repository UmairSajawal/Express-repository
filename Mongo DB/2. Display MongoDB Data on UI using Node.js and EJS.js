// ****** Conection Of MongoDB With NodeJS ******

// Downlaod mongodb and mongosh
// Install MongoDB in terminal. Now:  npm install mongodb
// 1. First open powershell run as administator and start mongo db:  net start MongoDB
// 2. Now type mongosh and press enter
// 3. Visit mongoDb NodeJS Driver website and copy command
// 4. Then in VS Code in terminal, type command: npm i mongodb. Note: The mongo server starts neccessary fot this process.

// ****** use file name index.js only, because in package.json main is index.js ******

import express from 'express';
import { MongoClient } from 'mongodb';

const dbname = "college"
const url = "mongodb://localhost:27017"  // mongodb defult url
const client = new MongoClient(url)

const app = express();


app.set("view engine",'ejs')
app.get("/", async (req, resp)=>{
    await client.connect()
    const db = client.db(dbname)
    const collection = db.collection('students')

    const students = await collection.find().toArray()
    console.log(students)
    resp.render('students', {students})
})
app.listen(3200);


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