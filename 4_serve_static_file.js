const express = require('express');
const path = require('path');
const app = express();

const staticPath = path.join(__dirname, "../Express");

// built-in middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    console.log("This is my home page");
});

app.listen(8004, () => {
    console.log("Server is running on port 8004");
});