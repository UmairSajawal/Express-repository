// Note: Create folder page or any name and create two files home.js and about.js in it and write the below code in it and import those files in index.js file.


import express from 'express'            // Note: Ecmascript ES6 method, type: module in package.json file, for use this write type: module in package.json file
import home from "./pages/home.js";      // Note: write .js extension in import statement
import login from "./pages/login.js";    // Note: write .js extension in import statement
import submit from "./pages/submit.js";  // Note: write .js extension in import statement
const app = express();

app.get("", (req, resp) => {
    resp.send(home())
})

app.get("/login", (req, resp) => {
    resp.send(login())
})

app.post("/submit", (req, resp) => {
    resp.send(submit())
})

app.listen(3200);


// home.js file code:
/*
export default function home() {
    return "<h1>Home Page</h1> <a href='/login'>Go to Login</a>"
}
*/

// login.js file code:
/*
export default function login() {
    return `
    <form method="post" action="/submit">
        <input type="text" placeholder="Username" /> <br/><br/>
        <input type="password" placeholder="Password" /> <br/><br/>
        <button type="submit">Login</button>
        <a href="/">Back to Home</a>  
    </form>
    `
}
*/

// submit.js file code:
/*
export default function submit() {
    return "<h1>Submit Page</h1> <a href='/'>Go to Home</a>"
}
*/