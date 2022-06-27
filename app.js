"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

// handle requests on / 
app.get("/", (req, res) => {
    // respond with html page
    res.sendFile(__dirname + "/index.html");
}
);

// respond to requests for /hello
app.get("/hello", (req, res) => {
    res.send("Hello World!");
});

// respond to requests for /goodbye
app.get("/goodbye", (req, res) => {
    res.send("Goodbye World!");
});


// handle 404 requests
app.use((req, res) => {
    res.status(404).send("404: Page not found");
});


const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    // server url
    console.log(`http://localhost:${port}`);
})