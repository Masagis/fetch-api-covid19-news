const express = require("express");
const app = express();
const axios = require("axios");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Homepage",
  });
});

app.get("/greet", (req, res) => {
  res.render("greet", {
    nama: req.query.name,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Homepage",
    nama: "About",
  });
});

app.get("/news", (req, res) => {
  // Url Public API
  const url = "https://berita-indo-api.vercel.app/v1";

  // unutk method get, argument pertama adalah url endpoint API
  axios.get(`${url}/cnbc-news`).then((result) => {
    res.render("news", {
      title: "Berita",
      news: result.data.data,
    });
  });
});

app.get("/corona", (req, res) => {
  // Url Public API
  const url = "https://api.kawalcorona.com/indonesia/provinsi";

  // unutk method get, argument pertama adalah url endpoint API
  axios.get(`${url}`).then((result) => {
    res.render("corona", {
      title: "Data Corona",
      corona: result.data,
    });
  });
});

app.listen(3000, () => console.log("Server Ready!"));
