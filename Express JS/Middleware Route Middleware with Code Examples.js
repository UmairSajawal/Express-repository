// *******  Route Middleware with Code Examples *******
// Route middleware apply to specific routes only and Application middleware apply to all routes.
// Apply Route Middleware to Specific Routes in Express.js



// ****** use file name index.js only, because in package.json main is index.js ******



import express from 'express';
const app = express();

// Note: We can apply multiple route middleware functions to a single route.
// Route Middleware Function 1:
function checkAgeRouterMiddleware(req, resp, next){
    console.log(req.query.age);  // prints age in command prompt added in url

    if(!req.query.age || req.query.age<18){
        resp.send("<h1>Access Denied: You must be at least 18 years old.</h1>");
    } else {
        next(); 
    }
}

// Route Middleware Function 2:
function checkUrlRouterMiddleware(req, resp, next){
    console.log("This request URL is:", req.url);
    next();
}

app.get("/", checkUrlRouterMiddleware, (req, resp, next) => {
    resp.send("<h1>Home Page</h1>")
})

app.get("/about", (req, resp) => {
    resp.send("<h1>About Page</h1>")
})

app.get("/users", checkAgeRouterMiddleware, checkUrlRouterMiddleware, (req, resp) => {
    resp.send("<h1>User Page</h1>")
})

app.get("/products", checkAgeRouterMiddleware, (req, resp) => {
    resp.send("<h1>Products Page</h1>")
})

app.listen(3200);
