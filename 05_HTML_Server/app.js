// const express = require("express");
import express from "express";

import path from "path";

// const { parties } = require("./util/partiesLibrary.js")
// console.log(parties);

import partiesLibraryESModules from "./util/partiesLibraryES.js";







const app = express();

app.use(express.static("public"));









let visitorCount = 0;

app.get("/", (requ, resp) => {
    resp.sendFile(path.resolve("public/frontpage/frontpage.html"));

    console.log("welcome frontpage")
});

app.get("/partypage", (requ, resp) => {
    resp.sendFile(path.resolve("public/partypage/partyPage.html"));

    console.log("welcome partypage")
});






app.get("/visitorscounts", (requ, resp) => {
    visitorCount++;
    resp.send({data : visitorCount})
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
