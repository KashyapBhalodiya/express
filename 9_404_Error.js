const express = require('express');
const path = require('path');
const app = express();

const staticPath = path.join(__dirname, "./views");

// to set the view engine
app.set("view engine", "hbs");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("This is our home page");
});

app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: "Oops! Page couldn't be found",
    });
});

app.listen(8009, function() {
    console.log("Server is running on port 8008");
});

