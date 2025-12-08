// ******  What is Middleware in express js ******
// Middleware function works between client request and server response.
// In express js middleware function is used to modify request and response objects.
// There are many types of middleware functions in express js:
// 1. Application-level middleware
// 2. Router-level middleware
// 3. Error-handling middleware
// ....

// This is application level middleware example:

import express from 'express';
const app = express();

// Middleware function to log request details
app.use((req, resp, next) => {
    console.log("User is accessing the website : " + req.url + " page");
    next();  // next() function is used to pass control to the next middleware function in the stack
})

app.get('/', (req, resp) => {
    resp.send("<h1>Home Page</h1>")
})

app.get('/about', (req, resp) => {
    resp.send("<h1>About Page</h1>")
})

app.get('/product', (req, resp) => {
    resp.send("<h1>Product Page</h1>")
})

app.listen(3000);