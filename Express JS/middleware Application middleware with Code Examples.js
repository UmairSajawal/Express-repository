// ******* Age Check & IP Address Middleware with Code Examples *******
// This middleware checks if the user is at least 18 years old and logs their IP address.



// **** use file name index.js only, because in package.json main is index.js ****



import express from 'express';
const app = express();

// function ageCheck(req, resp, next){
//     if(!req.query.age || req.query.age<18){
//         resp.send("<h1>Access Denied: You must be at least 18 years old.</h1>");
//     } else {
//         next(); // Proceed to the next middleware or route handler
//     }
// }
// app.use(ageCheck);

function apCheck(req, resp, next){
    const ip  = req.socket.remoteAddress;
    console.log(ip)
    if(ip.includes("192.168.1.9")){  // Blocks this ip address
        resp.send("<h1>Access Denied: You must be at least 18 years old.</h1>");
    } else {
        next(); 
    }
}
app.use(apCheck);  
// Note: Instead of running: localhost:3000/admin?age=30
// Note: Run this on browser : http://192.168.1.9:3000/admin?age=30,   ip address:port number/page name? age

app.get("/", (req, resp) => {
    resp.send("<h1>Home Page</h1>")
})

app.get("/login", (req, resp) => {
    resp.send("<h1>Login Page</h1>")
})

app.get("/admin", (req, resp) => {
    resp.send("<h1>Admin Page</h1>")
})

app.listen(3000);
