// *******  Built-In Middleware with Code Examples *******
// Route middleware apply to specific routes only and Application middleware apply to all routes.
// Apply Route Middleware to Specific Routes in Express.js



// ****** use file name index.js only, because in package.json main is index.js ******


import express from 'express'
import path from 'path'
const app = express()

// Built-in Mildware
app.use(express.urlencoded({extended:false}))  // Example 1
app.use(express.static('public'))  // Example

app.get("/", (req,  resp) => {
    const filePath = path.resolve('view/home.html')
    resp.sendFile(filePath)
})

app.get("/login", (req,  resp) => {
    resp.send(`Login Page <br><br>
        <form action="/submit" method="post">
            <input type="email" placeholder="Email..." name="email">
            <br><br>
            <input type="password" placeholder="Password..." name="email">
            <br><br>
            <button>Submit</button>
        </form>
        `)
})

app.post("/submit", (req,  resp) => {
    console.log(req.body)
    resp.send("Submit Page")
})

app.get("/user", (req,  resp) => {
    resp.send("User Page")
})

app.listen(3200); 


// ************************
// Note: Make a new folder public and make style.css file in it.
// Note: Make new folder view and make home.html file in it.


// *** File code:  public/style.css ***
/*
h1{
    color: orange;
}

h2{
    color: skyblue
}
*/

// *** File code:  view/home.html ***
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>HTML Home Page</h1>
    <h2>Heading 2</h2>
</body>
</html>
*/