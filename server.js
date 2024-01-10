const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();
const port = 3000;

//Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

//static directory public
app.use(express.static("public"));

//Post
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const model = {
    arrowHide: true,
  };
  res.render("home.handlebars", model);
});

app.get("/about", (req, res) => {
  const model = {
    isMenuAbout: true,
  };
  res.render("about.handlebars", model);
});

app.get("/programs", (req, res) => {
  const model = {
    isMenuEdu: true,
  };
  res.render("programs.handlebars", model);
});
app.get("/courses", (req, res) => {
  const model = {
    isMenuEdu: true,
  };
  res.render("courses.handlebars", model);
});

app.get("/experience", (req, res) => {
  const model = {
    isMenuCV: true,
  };
  res.render("experience.handlebars", model);
});

app.get("/other", (req, res) => {
  const model = {
    isMenuCV: true,
  };
  res.render("other.handlebars", model);
});

app.get("/skills-coding", (req, res) => {
  const model = {
    isMenuSki: true,
  };
  res.render("skills-coding.handlebars", model);
});
app.get("/skills-graphic", (req, res) => {
  const model = {
    isMenuSki: true,
  };
  res.render("skills-graphic.handlebars", model);
});

app.get("/projects-coding", (req, res) => {
  const model = {
    isMenuPro: true,
  };
  res.render("projects-coding.handlebars", model);
});

app.get("/projects-graphic", (req, res) => {
  const model = {
    isMenuPro: true,
  };
  res.render("projects-graphic.handlebars", model);
});

app.get("/dortmund-project", (req, res) => {
  const model = {
    isMenuPro: true,
  };
  res.render("dortmund-project.handlebars", model);
});
app.get("/dl-project", (req, res) => {
  const model = {
    isMenuPro: true,
  };
  res.render("dl-project.handlebars", model);
});
app.get("/rubenssons-project", (req, res) => {
  const model = {
    isMenuPro: true,
  };
  res.render("rubenssons-project.handlebars", model);
});
app.get("/poster-project", (req, res) => {
  const model = {
    isMenuPro: true,
  };
  res.render("poster-project.handlebars", model);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
