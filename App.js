const express = require('express');
const app = express();
const port = 5000
const cors = require('cors');

app.use(cors());

const chefInfo = require('./Data/chef.json');


app.get('/chefs', (req, res) => {
    res.send(chefInfo);
});

app.listen(port, () => {
    console.log(`Example app ${port}`);
});