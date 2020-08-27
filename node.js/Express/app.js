const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const Joi = require("joi");
const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello world again");
// });
// app.get("/example", (req, res) => {
//   res.send("Example page");
// });
// app.get("/example/:name", (req, res) => {
//   res.send("Hello, " + req.params.name);
//   console.log(req.query);
// });
// app.listen(3000);

app.use("/public", express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("middleware executed");
  next();
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  fs.createReadStream(path.join(__dirname, "static", "index.html")).pipe(res);
});

app.post("/", (req, res) => {
  const schema = Joi.object().keys({
    email: Joi.string().trim().email(),
    password: Joi.string().trim().min(5).max(10),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    console.log(error);
    res.send("error");
  } else {
    console.log(value);
    res.send("success");
  }
});

app.get("/ejs", (req, res) => {
  res.render("index", {
    data: {
      loggedIn: true,
      user: "aditya",
      results: ["aditya", "aditya2", "aditya3"],
    },
  });
});

const people = require("./routes/people");
app.use("/people", people);

app.listen(3000);
