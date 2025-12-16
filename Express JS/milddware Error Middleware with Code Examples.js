// *******   Error Middleware with Code Examples *******
// Error Middleware: is a middleware that handles errors in the application.
// It catches errors thrown in the application and sends appropriate responses to the client.




// ****** use file name index.js only, because in package.json main is index.js ******



import express from 'express';


const app = express();


app.get("/", (req, resp) => {
    resp.send("Home Page");
})

app.get("/user", (req, resp) => {
   // resp.send1("User Page"); // This will throw an error because send1 is not a function
    resp.send("User Page");
})

app.get("/error", (req, resp, next) => {
    const error = new Error('');
    error.status = 404;
    next(error);  // Forward the error to the error handling middleware
})

// Error Handling Middleware
app.use((error, req, resp, next) => {
    resp.status(error.status || 500).send("Try after some time");
})

app.listen(2900);