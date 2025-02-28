const express = require("express");

const { parties } = require("./util/partiesLibrary.js")



// console.log(parties);

const app = express();

app.use(express.static("public"));









let visitorCount = 0;

app.get("/", (requ, resp) => {
    resp.sendFile(__dirname + "/public/frontpage/frontpage.html");

    console.log("welcome frontpage")
});

app.get("/partypage", (requ, resp) => {
    resp.sendFile(__dirname + "/public/partypage/partypage.html");

    console.log("welcome partypage")
});






app.get("/visitorscounts", (requ, resp) => {
    visitorCount++;
    resp.send({data : visitorCount})
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
