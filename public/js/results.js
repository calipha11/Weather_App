$(".event").on("click", function(a){
    $(".tempF").toggle();
    $(".tempC").toggle();
    console.log("hello");
});

$(document).ready(function(){
    console.log($(".weather").text())
    if($(".weather").text() === 'Sunny'){
        $("body").css({background: 'url("https://ak5.picdn.net/shutterstock/videos/890446/thumb/1.jpg") fixed bottom left'});
    } else if($(".weather").text() === 'Thunderstorm'){
        $("body").css({background: 'url("https://0.s3.envato.com/files/42492758/RainCloudTL21-5930.jpg") fixed bottom left'});
    } else if($(".weather").text() === 'Clear'){
        $("body").css({background: 'url("https://upload.wikimedia.org/wikipedia/commons/6/62/Clear_weather_clouds.jpg") fixed bottom left'});
    } else if($(".weather").text() === 'Clouds'){
        $("body").css({background: 'url("https://ak8.picdn.net/shutterstock/videos/1456171/thumb/1.jpg?i10c=img.resize(height:160)") fixed bottom left'});
    }
});