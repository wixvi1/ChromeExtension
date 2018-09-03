document.addEventListener("DOMContentLoaded", function(){
        var city_name, latitute, longtitude, weather, description, temp, country;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //january = 0
        var yyyy = today.getFullYear();
        
        if(dd<10) {
            dd = '0'+dd
        } 

        if(mm<10) {
            mm = '0'+mm
        } 

        today = dd + '/' + mm + '/' + yyyy;
        
        
         $.getJSON("http://api.openweathermap.org/data/2.5/find?q=Riga&type=like&APPID=06ae28a74a257d60dd4e80da4dd7cebe",function(data){
             
             console.log(data.list[0])
                
             city_name = data.list[0].name;
             country = data.list[0].sys.country;
             latitute = data.list[0].coord.lat;
             longtitude = data.list[0].coord.lon;
             weather = data.list[0].weather[0].main;
             description = data.list[0].weather[0].description;
             temp = data.list[0].main.temp - 273.15;//temperature in json object is provided in Kelvins, Celsius = Kelvin - 273.15
            
             
             $(".city").html(city_name);
             $(".weather").html(weather);
             $(".temp").html(temp + " &#8451");
             $(".description").html(description)
             $(".latitude").html(latitute);
             $(".longtitude").html(longtitude);
             $(".date").html(today);
         });

})
