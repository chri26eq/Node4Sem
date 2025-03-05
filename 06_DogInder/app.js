import express from "express";
import path from "path"

const app = express();

app.get("/", (requ, resp) => {
    resp.sendFile(path.resolve("public/frontpage/frontpage.html"));
});

const PORT = 8080;
app.listen(PORT, () => console.log("Jeg lytter på den dejlige", PORT, "port"))