// ******* MVC Architecture Example with Node.js *******
// MVC: Model View Controller
// Model: Data Handling
// View: User Interface
// Controller: Logic to handle requests and responses
// MVC helps in separating concerns, making code more organized and maintainable.

// 1. Create a folder structure as follows:
//    - project-folder / like express js
//      - index.js
//      - views
//          - user.ejs
//      - models
//          - userModel.js
//      - controllers
//          - userController.js

//
// ****** Note: use file name index.js only, because in package.json main is index.js ******


import express from 'express';
import { handleUsers } from './views/model/controller/userController.js';  // write .js at the end

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, resp) => {
    resp.send('Home Page');
})

app.get('/user', handleUsers)

app.listen(4800);


// views/user.ejs file code:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User View</title>
</head>
<body>
    <h1>Users List Page</h1>
    <ul>
        <% for(let i=0;i<users.length;i++){ %>
        <li><%= users[i] %></li>
        <% } %>
    </ul>
</body>
</html>
*/


// controllers/userController.js file code:
/*
import { userList } from "../userModel.js";  // write .js at the end

export function handleUsers(req, resp){
    const userData = userList();
    console.log(userData);
    resp.render('user', {users: userData});
}
*/


// models/userModel.js file code:
/*
export function userList() {
    return ["Umair", "Sajawal", "Shahaan", "Ayan", "Zain", "Ihtasham"];
}
*/
