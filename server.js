const express = require("express");
const app = express();
const path = require("path");
const axios = require('axios');
const hbs = require('hbs');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const apiKey = process.env.API_KEY

const viewsPath = path.join(__dirname, '/views');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
const partialPath = path.join(__dirname, '/views/inc');
hbs.registerPartials(partialPath);


const publicDirectory = path.join(__dirname, '/public');
app.use(express.static(publicDirectory));
app.use(express.static(publicDirectory))

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get("/", (req, res) => {
 res.render("index")
});


app.get("/displayWeather", async  (req, res) => {
  let city = "" 
  let country = ""
    if(req.query.citySearch && req.query.countrySearch){
       city = req.query.citySearch;
       country = req.query.countrySearch;
    }else{
      city = "Manchester"
      country = "GB"
    }

    try {
      const weatherApi = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`)
      // console.log(weatherApi.data)
      res.render("displayWeather", {
          city: weatherApi.data.name,
          temp: weatherApi.data.main.temp,
          description: weatherApi.data.weather[0].description,
          weatherIcon: weatherApi.data.weather[0].icon

      })
    } catch (error) {
      res.render("error")
    }
});

app.get("/about", (req, res) => {
  res.render("about")
    });

app.get("/manchester" , async (req, res) => {
  try {
    const locationApi = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=53.522820&lon=-1.128462&units=metric&appid=${apiKey}`)
    console.log(locationApi.data.daily[0].temp.day)

    res.render("manchester", {
        
        description: locationApi.data.current.temp,
        dailyTemp: locationApi.data.daily,
        iconOne: locationApi.data.daily[0].weather[0].icon,
        iconTwo:locationApi.data.daily[1].weather[0].icon,
        iconThree:locationApi.data.daily[2].weather[0].icon,
        iconFour:locationApi.data.daily[3].weather[0].icon,
        iconFive:locationApi.data.daily[4].weather[0].icon,
        iconSix:locationApi.data.daily[5].weather[0].icon,
        iconSeven:locationApi.data.daily[6].weather[0].icon,
        iconEight:locationApi.data.daily[6].weather[0].icon,
       


    })
  } catch (error) {
    res.render("error")
  }
})



app.get("*", (req, res) => {
  res.send("<h1>Sorry this page doesn't exist</h1>");
});


app.listen(5001, () => {
  console.log("Server is running on port 5001");
});




