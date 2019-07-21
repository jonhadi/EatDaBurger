var express = require('express');
var routes = require('./controllers/router');
var exphbs = require("express-handlebars");

var app = express();

const PORT = process.env.PORT || 3333;

app.use(routes);

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "/views/layouts/main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("Burgers at http://localhost:" + PORT);
});
