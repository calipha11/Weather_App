var express         = require("express"),
    app             = express(),
    request         = require("request"),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require("mongoose");
   
    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get("/", function(req, res){
    var location_url = 'http://ip-api.com/json';

    request(location_url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            var city = data.city;
            var regionName = data.regionName;

            var appidkey = 'a609996a5bb0a8059632a44fceeb2da9';
            var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + appidkey;
    
            request(url, function(error, response, body){
                if(!error && response.statusCode == 200){
                    var data = JSON.parse(body);
                    var tempC = Math.round(data.main.temp - 273);
                    var tempF = Math.round(((data.main.temp - 273)*(9/5)) + 32);
                    var weather = data.weather[0].main;
                    res.render("results", {tempC: tempC, tempF: tempF, weather: weather, city: city, regionName: regionName});
                } else {
                    console.log(error);
                }   
            });
       }
   });
});

app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("Server started");
});