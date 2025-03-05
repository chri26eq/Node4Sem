const express = require("express");
const app = express();

app.use(express.json()); // tillader Express at parse json i request bodyen





app.get("/", (requ, resp) => {
    resp.send(`
        <h1>This is the root route</h1>
        <h3>welcome</h3>
        `);
});



app.get("/welcomepage", (requ, resp) => {
    resp.sendFile(__dirname + "/index.html")
});






app.get("/blablabla", (requ, resp) => {
    resp.send({data: "This is the blablabla route"});
});





app.get("/yourfavoritenumber/:favoriteNumber", (requ, resp) => {
    console.log(requ.params.favoriteNumber);
    resp.send({data: `Your favorite number is ${requ.params.favoriteNumber}`});
});

app.get("/favoritethings/:flower/:animal", (requ, resp) => {

    resp.send({data: `Your favorite flower is ${requ.params.flower} and your favorite animal is ${requ.params.animal}`});
});

app.get("/search", (requ, resp) => {

    resp.send({data: `You searched for ${requ.query.name}`});
});

app.post("/favoritepoliticians", (requ, resp) => {

    console.log(requ.body);
    resp.send({data: requ.body});
  });

app.post("/fruits", (requ, resp) => {

    console.log(requ.body);
    resp.send({data: requ.body});
  });




app.get("/redirecttofavoritethings", (requ, resp) => {
    resp.redirect("/favoritethings/tulips/sea lions")
});






app.listen(8080)