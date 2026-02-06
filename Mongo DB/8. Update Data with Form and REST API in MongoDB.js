// ******* 8. Update Data with Form and REST API in MongoDB *******

// use index.js file name for running this code


import express from 'express';
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb'

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

    // DELETE Method REST API, use this api in front-end or mobile app to delete data in db
    app.delete("/delete/:id", async (req, resp)=>{     // use thunder client, on thunder client write path: http://localhost:3300/delete/id... (you can copy id from database mongodb) and select delete method and in body select json and write data in json format and click on send button
        console.log(req.params.id)  // to get id from url and send on output

        const collection = db.collection("students")
        const result = await collection.deleteOne({_id: new ObjectId(req.params.id)})  // delete data from database using id // add import { ObjectId } from 'mongodb' at the top of the file to use ObjectId
        if(result){
            resp.send({
                message: "Delete student successfully",
                success: true
            })
        } else {
            resp.send({
                message: "Student not deleted successfully, try after some time",
                success: false
            })
        }
    })
    
    // GET Method to delete student using link in browser  // Delete from UI
    // localhost:3300/ui
    app.get("/ui/delete/:id", async (req, resp)=>{     // use thunder client, on thunder client write path: http://localhost:3300/delete/id... (you can copy id from database mongodb) and select delete method and in body select json and write data in json format and click on send button
        console.log(req.params.id)  // to get id from url and send on output

        const collection = db.collection("students")
        const result = await collection.deleteOne({_id: new ObjectId(req.params.id)})  // delete data from database using id // add import { ObjectId } from 'mongodb' at the top of the file to use ObjectId
        if(result){
            resp.send("<h1>Student records deleted</h1>")
        } else {
            resp.send("<h1>Student records not deleted</h1>")
        }
    })

    // GET Method to Populate student data using link in browser  // Populate from UI, populates means autofill the saved data into the form
    // localhost:3300/ui/student/id... (you can copy id from database mongodb)  //localhost:3300/ui
    app.get("/ui/student/:id", async (req, resp)=>{
        const id = req.params.id;
        console.log(id);
        const collection = db.collection("students")
        const result = await collection.findOne({_id: new ObjectId(req.params.id)})  // delete data from database using id // add import { ObjectId } from 'mongodb' at the top of the file to use ObjectId
        resp.render("update-student", {result});
    })

    // to fetch data through api for update student using link in browser  
    app.get("/student/:id", async (req, resp)=>{
        const id = req.params.id;
        console.log(id);
        const collection = db.collection("students")
        const result = await collection.findOne({_id: new ObjectId(req.params.id)})  // delete data from database using id // add import { ObjectId } from 'mongodb' at the top of the file to use ObjectId
        resp.send({   // use thunder client, on thunder client write path: http://localhost:3300/student/id... (you can copy id from database mongodb) and select get method and in body select json and write data in json format and click on send button
            message: "Student data fetched successfully",
            success: true,
            result: result
        });
    })
    
    // POST Method to update student data using link in browser  // Update from UI
    app.post("/ui/update/:id", (req, resp)=>{
        console.log(req.body);
        console.log(req.params.id);

        const collection = db.collection("students");
        const filter = {_id: new ObjectId(req.params.id)};  // add import { ObjectId } from 'mongodb' at the top of the file to use ObjectId
        const update = {$set:req.body};  // to set new data in database
        const result = collection.updateOne(filter,update);

        if(result){
            resp.send("<h1>Data updated successfully</h1>")
        } else {
            resp.send("<h1>Data not updated</h1>")
        }
    })

    // PUT Method to update student data From API method // Update from API, use this api in front-end or mobile app to update data in db
    app.put("/update/:id", (req, resp)=>{
        console.log(req.body);
        console.log(req.params.id);

        const collection = db.collection("students");
        const filter = {_id: new ObjectId(req.params.id)};  // add import { ObjectId } from 'mongodb' at the top of the file to use ObjectId
        const update = {$set:req.body};  // to set new data in database
        const result = collection.updateOne(filter,update);

        if(result){
            resp.send({   // use thunder client, on thunder client write path: http://localhost:3300/update/id... (you can copy id from database mongodb) and select PUT method and in body select json and write data in json format and click on send button
            message: "Student data updated successfully",
            success: true,
            result: req.body
        });
        } else {
            resp.send({   
            message: "Data not updated",
            success: false,
            result: null
        });
        }
    })

})

app.listen(3300);

// route to check ui or table data on output: http://localhost:3300/ui
// route to check api data on output: http://localhost:3300/api


// views>update-student.ejs file code:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Student</title>
</head>
<body>
    <form method="post" action="/ui/update/<%= result._id%>">
        <input name="name" value="<%= result.name%>" placeholder="Enter Name"/><br/><br/>
        <input name="age" value="<%= result.age%>" placeholder="Enter Age"/><br/><br/>
        <input name="email" value="<%= result.email%>" placeholder="Enter Email"/><br/><br/>
        <button>Update Student Data</button>
    </form>
</body>
</html>
*/

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
            <td>Operation</td>
        </tr>
<% students.forEach(student=>{ %>
        <tr>
            <td><%= student.name %></td>
            <td><%= student.age %></td>
            <td><%= student.email %></td>
            <td><a href="/ui/delete/<%= student._id %>">Delete</a></td>
            <td><a href="/ui/student/<%= student._id %>">Update</a></td>
        </tr>
<% }) %>
    </table>
</body>
</html>
*/
