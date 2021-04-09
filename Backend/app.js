const express = require("express");
const app = express();

var mysql = require('mysql');
app.get("/", (req, res) => {
    res.send("Good")
})

app.listen(4000, () => {
    console.log('Server Listening');
})