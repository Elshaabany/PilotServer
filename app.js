"use strict";
//Express server on port 3000
const express = require("express");
const app = express();
const port = 3000;

// Express server configuration
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// static files
app.use(express.static("public"));

// require routes
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");

// use routes
app.use("/", indexRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);

// handle 404 requests
// app.use((req, res, next) => {
//     res.status(404).render("404");
// });


app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));