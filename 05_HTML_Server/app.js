const express = require("express");

const app = express();

app.get("/", (requ, resp) => {

});


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
