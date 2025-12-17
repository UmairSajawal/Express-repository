// ******* Loops and Conditions in EJS Template Files *******



// ****** Note: use file name index.js only, because in package.json main is index.js ******


import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, resp) => {
    resp.send('Home Page');
})

app.get('/users', (req, resp) => {
    const users = ["Umair", "Sajawal", "Shahaan", "Ayan", "Zain", "Ihtasham"];
    resp.render('users', {users: users});
})

app.listen(4700);


// views/users.ejs file content:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Users List Page In Ejs</title>
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