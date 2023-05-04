const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/category.json');
const chefData =  require('./data/chefs-data.json');


app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is running')
});

app.get('/categories',(req, res) =>{
    res.send(categories);
})
app.get('/chefData',(req,res) =>{
    res.send(chefData);
})

app.listen(port, () => {
    console.log(`Dragon API is running on port:${port}`)
})