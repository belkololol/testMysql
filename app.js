const mysql = require("mysql2");
const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
// const urlencodedParser = bodyParser.urlencoded({extended: false});

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "testovoe",
    password: "OlgaDima12"
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
