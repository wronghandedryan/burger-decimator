const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require ("./controllers/burgers_controller.js");
app.use(routes);

app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}`);
});