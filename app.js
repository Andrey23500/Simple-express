const express = require("express");


const app = express();
app.get("/", function (request, response) {
   response.send("<h2>Hello, World!</h2>");
});

app.use(express.static('public'));

app.listen(3000);