const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
var mysql = require('mysql');
app.get("/", (req, res) => {
    res.send("Good")
})

app.listen(4000, () => {
    console.log('Server Listening');
})