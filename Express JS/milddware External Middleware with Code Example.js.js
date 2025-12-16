// *******   External Middleware with Code Examples *******
// External Middleware: A middleware that is installed via npm and imported into your project.
// Example of morgan, a popular HTTP request logger middleware for Node.js
// 1. install morgan using npm
//    npm install morgan
// 2. import morgan in your project
// 3. use use() morgan as middleware in your Express app


// ****** use file name index.js only, because in package.json main is index.js ******

import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'))  // Using morgan middleware to log HTTP requests

app.get("/", (req, resp) => {
    resp.send("Home Page");
})

app.get("/user", (req, resp) => {
    resp.send("User Page");
})

app.get("/wait", (req, resp) => {
    setTimeout(() => {
        resp.send("Waited for 1 seconds");
    }, 1000);
})

app.listen(2900);