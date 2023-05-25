const express = require("express");
const cors = require("cors");
const data = require("./data/chefData.json");
const recipes = require("./data/recipes.json");

const PORT = 8080;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send(`<h1>hello word from server</h1>`);
});

app.get("/chefs", (req, res) => {
  res.send(data);
});

app.get('/chefs/:chefId', (req, res) => {
  const singleChef = data.find(chef => chef._id === req.params.chefId)
    res.send(singleChef);
})

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.listen(PORT, () => {
  console.log(`server listening on  http://localhost:${PORT}`);
});
