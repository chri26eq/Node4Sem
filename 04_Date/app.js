const express = require("express");

const app = express();

console.log(new Date()); // UTC

console.log(Date()); // Local date time (CEST for us) based on operatingsystem

console.log(Date.now()); // Unix time / Epoch (Seconds since 1970 Jan, 1st)


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


app.get("/months/v1", (requ, resp) => {
    const date = new Date();
    const monthIndex = date.getMonth();
    const month = months[monthIndex];
    resp.send({data: month});
});

app.get("/months/v2", (requ, resp) => {
    const currentMonth = new Date().toLocaleDateString("dk", {month: "long"})
    resp.send({data: currentMonth});
});

app.get("/months/v3", (requ, resp) => {
    const currentMonth = Date().split(" ")[1];
    resp.send({data: currentMonth});
});

app.get("/days/v1", (requ, resp) => {
    const dayOfWeek = new Date().getDay();
    resp.send({data: dayOfWeek});
});

app.get("/days/v2", (requ, resp) => {
    const dayOfWeek = new Date().toLocaleString("dk", {weekday: "long"})
    resp.send({data: dayOfWeek});
});


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT));