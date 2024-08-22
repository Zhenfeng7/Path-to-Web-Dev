import express from "express";

const app = express();
const port = 3000;

// app.get(path, callback func once we receive a GET request of the path)
app.get("/", (req, res) => {
    res.send("Wake Up! Stay awake");
    console.log(req.rawHeaders);
});

app.get("/about", (req, res) => {
    res.send("<h1>Zhen's info</h1>");
});

app.post("/register", (req, res) => {
    res.send("Func triggered by POST request");
    // Never reach res.sendStatus(201). Func ends after one res.send_()
    res.sendStatus(201);  
});

app.put("/user", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});