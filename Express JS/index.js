// Method 1:
// const express = require('express')();   // app is executed as a function because express js creates server automatically
// app.listen(3100);

// Method 2:
// // const express = require('express');     // Note: vanilla js method, type: commonjs in package.json file
// const app = express();

// // console.log(app)                        // object showing all methods and properties of express app

// app.get("", (req, resp) => [               // Note: "" means root path "/" home page
//     resp.send("<h1>Hello Express JS Home Page</h1>")
// ])

// app.get("/about", (req, resp) => [         
//     resp.send("<h1>This is about page</h1>")
// ])

// app.listen(3100);

// Method 3:
import express from 'express';             // Note: Ecmascript ES6 method, type: module in package.json file, for use this write type: module in package.json file
import home, { contact } from './pages/home.js';
import about from './pages/about.js';


const app = express();

app.get("", (req, resp) => [               
    resp.send(home())
])

app.get("/about", (req, resp) => [         
    resp.send(about())
])

app.get("/contact", (req, resp) => [         
    resp.send(contact())                   // Note create this module in home.js file
])

app.listen(3100);

// ***********************************
// Note: create pages folder and create two files home.js and about.js in it and write the above code in it.

// home.js file code;
/*
export default function home() {
    return "<h1>Home Page with Ecmascript export way</h1>"
}

export function contact() {
    return "<h1>Contact Page with Ecmascript export way</h1>"
}

*/

// about.js file code;
/*
export default function about() {
    return "<h1>About Page with Ecmascript export way</h1>"
}
*/
