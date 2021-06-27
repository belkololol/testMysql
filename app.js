const mysql = require("mysql2");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// const pool = mysql.createPool({
//     connectionLimit: 5,
//     host: "localhost",
//     user: "root",
//     database: "testovoe",
//     password: "OlgaDima12"
// });

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "us-cdbr-east-04.cleardb.com",
    user: "bfdca621169112",
    database: "heroku_96cbffad03274ac",
    password: "935765f0"
});

app.use(express.static('public'));

app.get('/tasks', function (req, res) {
    pool.query("SELECT * FROM tasks", function (err, data) {
        if (err) return console.log(err);
        res.send(data);
    });
});

app.listen(port, function () {
    console.log("Сервер ожидает подключения...");
});
