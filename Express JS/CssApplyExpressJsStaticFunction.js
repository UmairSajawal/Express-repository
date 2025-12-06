// ***** Render HTML File in Node.js *****
// Note: Make folder choose any name or public and then create css folder in it and create style.css file in it
// Note: Make folder name view or another name and place files index.html, about.html, login.html with code in it.

import express from 'express';
import path from 'path';

const app = express();
const absPath = path.resolve('./view');   // make absolute path common for all files
const publicPath = path.resolve('./public');

app.use(express.static(publicPath) );  // to apply css file in html file using static function of express.js
console.log(publicPath);

app.get('/', (req, resp) =>{
    // Note: './view/index.html' is relative path of file and not working for sendFile() method
    resp.sendFile(absPath+'/home.html')
})

app.get('/login', (req, resp) =>{    
    resp.sendFile(absPath+'/login.html')
})
app.get('/about', (req, resp) =>{
    resp.sendFile(absPath+'/about.html')
})

app.use((req, resp) =>{   // Note : use() method for handling 404 error page or handle fall back of error page
    resp.sendFile(absPath+'/404.html')
})

app.listen(3600);


// ***** HTML FILES *****

// Note: Create 3 files home.html, login.html, about.html in view folder with below code respectively.

// File: public/css/style.css code:
/*
 *** Note: Make folder choose any name or public and then create css folder in it and create style.css file in it *** 

h1 {
    font-family: Arial, sans-serif;
    color: orange;
}

a {
    display: inline-block;
    padding: 10px 18px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-family: Arial, sans-serif;
    transition: 0.3s;
}

a:hover {
    background: #0056b3;
}
*/


// File: view/404.html code:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
            padding: 20px;
        }

        .container {
            max-width: 500px;
            background: #fff;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        h1 {
            font-size: 100px;
            color: #ff3b3b;
        }

        h2 {
            font-size: 28px;
            margin-top: -10px;
            color: #333;
        }

        p {
            margin: 15px 0;
            color: #555;
            font-size: 16px;
        }

        a {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 25px;
            background: #007bff;
            color: #fff;
            text-decoration: none;
            font-size: 16px;
            border-radius: 5px;
            transition: 0.3s;
        }

        a:hover {
            background: #0056b3;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
        <a href="/">Go Back Home</a>
    </div>
</body>
</html>

*/

// File: view/home.html code:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
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
    <link rel="stylesheet" href="/css/style.css">
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
    <link rel="stylesheet" href="/css/style.css">
    <title>Document</title>
</head>
<body>
    <h1>About Page In Html</h1>
    <a href="/login">Go to Login</a>
</body>
</html>
*/