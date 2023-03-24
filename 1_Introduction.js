// Express.Js is a Node.js framework.
// It is a web application framework that provides you with a simple API to build websites, web apps and back ends.

// Why do we used Express.Js?
// Express.Js take you 5-10x less time and lines of code.

const express = require('express');

// we create a one application
const app = express();

// Syntax: app.get(route, callback) Methods: get, post, put, delete
/*
The callback function has 2 parameters, request(req) and response(res).
The request object represents HTTP request and has properties for request query string, parameters, body, HTTP Headers, etc.
The response object represents HTTP response that the Express app sends when it receives an HTTP request.
*/

app.get("/", (req, res) => {
    res.send("Hello from the home page");
});

app.get("/about", (req, res) => {
    res.send("Hello from the about page");
});

app.listen(8000, () => {
    res.send("server is starting at port 8000");
});
