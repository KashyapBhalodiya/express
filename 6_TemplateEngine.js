const express = require('express');
const path = require('path');
const app = express();
const port = 8006;

// built-in middle ware
const staticPath = path.join(__dirname, "./");
app.use(express.static(staticPath));

// to set the view engine
app.set('view engine', 'hbs');

// template engine route
app.get("/", (req, res) => {
    res.render('6_TemplateEngine');
});

app.get("/", (req, res) => {
    res.send("Hello this is our home page");
});

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
});