const express = require("express");


const app = express();
app.get("/", function (request, response) {
   response.send("<h2>Hello, World!</h2>");
});

app.use(express.static('public'));

app.get("/about", function (request, response) {

   response.send("<h1>О сайте</h1>");
});
app.listen(3000);