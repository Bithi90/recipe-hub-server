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

app.get('/chefData/:id', (req,res) =>{
    const id = req.params.id;
    console.log(id);
    const selectedChefData = chefData.find(n=> n.id===id);
    res.send(selectedChefData)
})

app.get('/categories/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    console.log(id);
    if(id === 0){
        res.send(chefData)
    }
    else{
        const categoryData = chefData.filter(c=> parseInt(c.category_id)===id);
        res.send(categoryData) 
    }
   
})

app.listen(port, () => {
    console.log(`Recipe API is running on port:${port}`)
})