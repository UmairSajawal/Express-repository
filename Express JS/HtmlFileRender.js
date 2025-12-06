// ***** Render HTML File in Node.js *****

// Note: Make folder name view or another name and place files index.html, about.html, login.html with code in it.

import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, resp) =>{
    // Note: './view/index.html' is relative path of file and not working for sendFile() method
    const absPath = path.resolve('./view/home.html')  // Note: resolve() is a path method to get absolute path means complete address of file
    resp.sendFile(absPath)
})

app.get('/login', (req, resp) =>{
    // Note: './view/index.html' is relative path of file and not working for sendFile() method
    const absPath = path.resolve('./view/login.html')  // Note: resolve() is a path method to get absolute path means complete address of file
    resp.sendFile(absPath)
})
app.get('/about', (req, resp) =>{
    // Note: './view/index.html' is relative path of file and not working for sendFile() method
    const absPath = path.resolve('./view/about.html')  // Note: resolve() is a path method to get absolute path means complete address of file
    resp.sendFile(absPath)
})

app.listen(3400);



// ***** HTML FILES *****

// Note: Create 3 files home.html, login.html, about.html in view folder with below code respectively.

// File: view/home.html code:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Home Page In Html</h1>
    <a href="/login">Go to Login</a>
    <br><br>
    <a href="/about">Go to About Page</a>
</body>
</html>
*/

// File: view/login.html code:  
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Login Page In Html</h1>
    <a href="/">Go to Home</a>
</body>
</html>
*/

// File: view/about.html code:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>About Page In Html</h1>
    <a href="/login">Go to Login</a>
</body>
</html>
*/