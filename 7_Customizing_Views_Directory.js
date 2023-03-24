// views: The directory where the template files are located. Default is root directory.
// view engine template engine to use.

const express = require('express');
const path = require('path');
const app = express();
const port = 8007;

// built-in middle ware
const staticPath = path.join(__dirname, "./");
app.use(express.static(staticPath));

// to set the view engine
app.set('view engine', 'hbs');
app.set('views', staticPath);

// template engine route
app.get("/", (req, res) => {
    res.render("7_Customizing_Views_Directory", {
        channleName: "Kashyap",
    });
});

app.get("/", (req, res) => {
    res.send("Hello this is our express server");
});

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
});