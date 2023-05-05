const express = require('express');
const app = express();
const port = 5000
const cors = require('cors');

app.use(cors());

const chefInfo = require('./Data/chef.json');
const customerReview = require('./Data/customer.json');
const allRecipes = require('./Data/recipes.json');


app.get('/chefs', (req, res) => {
    res.send(chefInfo);
});

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const specificChef = chefInfo.find(c => c.id === id);
    res.send(specificChef);
});

app.get('/recipes', (req, res) => {
    res.send(allRecipes);
});

app.get('/reviews', (req, res) => {
    res.send(customerReview);
});

app.listen(port, () => {
    console.log(`Example app ${port}`);
});