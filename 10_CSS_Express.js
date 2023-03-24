// partials: code blocks are reused many times in an application.

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const staticPath = path.join(__dirname, "./views");
const partialPath = path.join(__dirname, "./partials");

// to set the view engine
app.set("view engine", "hbs");
app.use(express.static(staticPath));

// to register a partials
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8010, function() {
    console.log("Server is running on port 8010");
});

