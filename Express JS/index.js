// Method 1:
// const express = require('express')();   // app is executed as a function because express js creates server automatically
// app.listen(3100);

// Method 2:
const express = require('express');
const app = express();

// console.log(app)   // object showing all methods and properties of express app

app.get("", (req, resp) => [       // Note: "" means root path "/" home page
    resp.send("<h1>Hello Express JS Home Page</h1>")
])

app.get("/about", (req, resp) => [       // Note: "" means root path "/" home page
    resp.send("<h1>This is about page</h1>")
])

app.listen(3100);
