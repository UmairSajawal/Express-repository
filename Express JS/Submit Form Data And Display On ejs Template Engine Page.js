// *******  Submit Form Data And Display On ejs Template Engine Page *******



// ****** use file name index.js only, because in package.json main is index.js ******


import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended : false}));

app.get('/', (req, resp) => {
    resp.send('Home Page');
})

app.get('/add-user', (req, resp) => {
    resp.render('addUser');
})

app.post('/submit-user', (req, resp) => {
    console.log(req.body);
    resp.render('submitUser', req.body);
})

app.listen(4700);


// views/addUser.ejs file code:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add User In Ejs</title>
</head>
<body>
    <form action="submit-user" method="post">
        <input type="text" placeholder="Enter your name" name="name">    <!-- giving name attribute is important -->
        <br><br>
        <input type="text" placeholder="Enter your email" name="email">  <!-- giving name attribute is important -->
        <br><br> 
        <input type="text" placeholder="Enter your age" name="age">      <!-- giving name attribute is important -->
        <br><br>
        <button type="submit">Submit User</button>
    </form>
</body>
</html>


*/


// views/submitUser.ejs file code:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submit Form In Ejs</title>
</head>
<body>
    <h1>User Submitted Successfully!</h1>
    <h2>Name: <%= name %></h2>
    <h2>Email: <%= email %></h2>
    <h2>Age: <%= age %></h2>
</body>
</html>
*/