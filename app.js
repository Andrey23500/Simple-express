const express = require("express");

const app = express();

app.get("/", function (request, response) {
   response.send("<h2>Hello, World!</h2>");
});

app.use(express.static('public'));

app.get("/about", function (request, response) {
   response.send("<h2>Это простое приложение на Express.js</h2>");
});

app.get('*', function(req, res){
   res.status(404).send("<h1>Страница не найдена</h1>");
 });
app.listen(3000);