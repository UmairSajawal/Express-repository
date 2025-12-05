
const express = require('express');
const app = express();
app.get("", (req, resp) => [       // Note: "" means root path "/" home page
    resp.send("<h1>Hello Express JS Home Page</h1>")
])

app.get("/about", (req, resp) => [       // Note: "" means root path "/" home page
    resp.send("<h1>This is about page</h1>")
])

app.listen(3100);