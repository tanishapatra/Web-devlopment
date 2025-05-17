import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    //const today = new Date("June 24, 2023 11:11:00");
    const today = new Date();
    const day = today.getDay();
    // console.log(day);
    let type = "a weekday";
    let adv = "its time to work!!";
    if (day === 0 || day === 6){
        type = "The Weekend";
        adv = "Enjoy have Fun!!"
    }
    res.render("index.ejs",{
        dayType: type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});