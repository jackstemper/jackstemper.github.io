const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const dogs = [
    {id:1, name:"Spot", breed:"mut", color:"brown" },
    {id:2, name:"Fido", breed:"golden Retreiver", color:"blonde"},
    {id:3, name:"Max", breed:"beagle", color:"black"},
    {id:4, name:"Ollie", breed:"poodle", color:"brown"},
    {id:5, name:"Leo", breed:"german shorthair", color:"brown"},
    {id:6, name:"Mango", breed:"pit bull", color:"brown"},
]

app.get('/api/dogs', (req,res)=>{
    res.send(dogs);
});

app.get('/api/dogs/:id', (req,res)=>{
    const requestedId = parseInt(req.params.id);
    const dog = dog.find(s =>s.id === requestedId);

    if(!dog) {
        res.status(404).send(`The dog with id ${requestedId} was not found`);
        return;
    }

    res.send(dog);
});

//render our html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

function validateDog(dog){
    const schema = {
        name:Joi.string().min(3).required(),
        breed:Joi.string().min(4).required(),
        color:Joi.string().required()
    }

    return Joi.validate(dog, schema);
}

app.post('/api/dogs', (req,res)=>{
    const result = validateDog(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }

    const dog = {
        id:dogs.length + 1,
        name : req.body.name,
        breed : req.body.breed,
        color : req.body.color
    }
    console.log("name is: " + req.body.name);
    dogs.push(dog);
    res.send(dog);
});

//update a dog
app.put('/api/dogs/:id', (req,res)=>{
    const requestedId = parseInt(req.params.id);
    const dog = dogs.find(s =>s.id === requestedId);

    //no dog with matchin id in array
    if(!dog) {
        res.status(404).send(`The dog with id ${requestedId} was not found`);
        return;
    }

    //validating dog with schema
    const result = validateDog(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //update
    dog.name = req.body.name;
    dog.breed = req.body.breed;
    dog.color = req.body.color;
    res.send(dog);

});

app.delete('/api/dogs/:id',(req,res)=>{
    const requestedId = parseInt(req.params.id);
    const dog = dogs.find(s =>s.id === requestedId);

    //no dog with matchin id in array
    if(!dog) {
        res.status(404).send(`The dog with id ${requestedId} was not found`);
        return;
    }

    //dog exists so I can go forward and delete it
    let index = dogs.indexOf(dog);
    dogs.splice(index,1);
    res.send(dog);
});


//listen
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});