const express = require('express');
const path = require('path');
const app = express();
const port = 8005;

// built-in middle ware
const staticPath = path.join(__dirname, "./");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("Hello this is our home page");
});

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
});