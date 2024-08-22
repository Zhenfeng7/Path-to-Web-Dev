import express from "express";


const app = express();
const port = 3000;

const today = new Date();
const day = today.getDay();

    console.log(day);

app.get('/', (req, res)=> {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "Time to go to work";
    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "It's time to have some fun";
    }

    res.render("index.ejs", {
        dayType: type, 
        advice: adv,
    });
});


app.listen(port, (req, res) => {
    console.log(`Running on port ${port}`);
});