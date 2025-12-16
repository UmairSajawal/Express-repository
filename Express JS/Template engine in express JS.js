// *******  Template engine in express JS *******
// Template engine: is a tool that helps to generate HTML markup with plain JavaScript.
// It fetch's data from node js server and injects that data into HTML templates.
// It helps to create dynamic web pages by combining templates with data.
// Common template engines for Express.js include EJS, Pug, and Handlebars.

// We use EJS (Embedded JavaScript) as the template engine in this example.
// To use EJS in an Express.js application, we need to set the view engine to 'ejs' and create EJS template files in a 'views' directory.
// Note: By default, Express looks for template files in a folder named 'views'.
// So you write only views folder name, not the complete path.

// Steps to use EJS template engine in express js:
// 1. First go to the npm js website copy command, install EJS using npm:
//    npm install ejs
// 2. Then create a folder named 'views' in the root directory of your project.
// 3. Then create an EJS file named 'index.ejs' inside the 'views' folder with the following content:



// ****** use file name index.js only, because in package.json main is index.js ******



import express from 'express';

const app = express();

app.set('view engine', 'ejs');
app.get("/", (req, resp) => {
    resp.render('home', {name: 'Umair Sajawal', topic: 'Embedded JavaScript', age: '23'});  // render method is used to fetch file from views folder
    // Note: In home.ejs file, Using <%= keyName %> EJS syntax to embed JavaScript variable values into HTML %>  

})

app.listen(4800);



// views/home.ejs file code:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embedded JavaScript File</title>
</head>
<body>
    <h1>Name: <%= name %></h1>    
    <h2>Topic: <%= topic %></h2>
    <h2>Age: <%= age %></h2>
</body>
</html>
*/