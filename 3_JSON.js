// how to send HTML and JSON data as a response using express

const express = require('express');

const app = express();
const port = 8002;

app.get('/', (req, res) => {
    res.write("<h2>Welcome to my home page</h2>");
    res.write("<h2>Welcome to my home page again</h2>");
    res.send();
});

app.get('/about', (req, res) => {
    res.send("Welcome to my about page");
});

app.get('/contact', (req, res) => {
    res.status(200).send("Welcome to my contact page");
});

app.get('/temp', (req, res) => {
    res.send([
        {
            id: 1,
            name: "Kashyap"
        },
        {
            id: 2,
            name: "Rehan"
        }
    ]);
});

app.listen(port, () => {
    console.log(`Listening to the port number ${port}`);
});