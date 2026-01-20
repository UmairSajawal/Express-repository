import express from 'express';
const app = express();

app.get('/', (req, resp) => {
    const users = ["Umair", "Ali", "Hassan"];
    let data = `<ul>`;
    for(let i=0; i<users.length; i++){
        data += `<li><a href=users/${users[i]}>${users[i]}</a></li>`;
        console.log(users[i]);
    }
    data += `</ul>`;
    //resp.send("<h1>Home Page</h1>")
    resp.send(data);
})

app.get("/users/:name", (req, resp) => {
    console.log(req.params.name)
    const userName = req.params.name;
    resp.send(`User Page of ${userName}`);
})

app.listen(3200);