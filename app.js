"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

// respond to requests for /hello
app.get("/hello", (req, res) => {
    res.send("Hello World!");
});

// handle 404 requests
app.use((req, res) => {
    res.status(404).send("404: Page not found");
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})