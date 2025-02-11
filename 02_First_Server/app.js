const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({data: "This is the root route"})
});

app.get("/blablabla", (req, res) => {
    res.send({data: "This is the blablabla route"})
});





app.get("/yourfavoritenumber/:favoriteNumber", (req, res) => {
    console.log(req.params.favoriteNumber)
    res.send({data: `Your favorite number is ${req.params.favoriteNumber}`})
})

app.get("/favoritethings/:flower/:animal", (req, res) => {
    
    res.send({data: `Your favorite flower is ${req.params.flower} and your favorite animal is ${req.params.animal}`})
})














app.listen(8080)