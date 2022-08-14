

const KEY = "api key";

const getWeather = async(city,country,key) => {
    try {
   const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${key}`)
   console.log(response.data);
   showWeather(response.data);
  
} catch (error) {
    console.error(error);
  }
};

//getWeather('canon', KEY)


function showWeather(data){
    let high = data.main.temp_max
    let low = data.main.temp_min
    let forcast = data.weather[0].main
    let humidity = data.main.humidity
    let icon= data.weather[0].icon
    console.log(icon)
   
    document.getElementById("high").innerHTML=high + ' &#176;F'
    document.getElementById("low").innerHTML=low + ' &#176;F'
    document.getElementById("forcast").innerHTML=forcast
    document.getElementById("humidity").innerHTML=humidity+ "%"
    document.getElementById("icon").innerHTML=`<img src=http://openweathermap.org/img/wn/${icon}@2x.png>`
   // iconImg.src = iconUrl;

}


const form = document.querySelector('#form')
form.addEventListener('submit', (event) => {
    console.log("here i am")
    event.preventDefault();
    let city = document.getElementById('city');
    let country = document.getElementById('country')
    let key = KEY
    console.log(city.value,country.value);
    getWeather(city.value,country.value,key)
});

function showTime(){
    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds();
    let mm = date.getMonth(); 
    let dd = date.getDate();
    let year = date.getFullYear();
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    let dates = "Todays date: "+ mm+"/"+dd+"/"+year + " ";
    document.getElementById("MyClockDisplay").innerText = time + dates;
    document.getElementById("MyClockDisplay").textContent = dates +"  "+ time;
    if (session ==="AM"){
        document.body.style.background = 'url("https://res.cloudinary.com/dxfkurrkj/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1660447680/Weather-App_efarrx.png")';
    }else{
        document.body.style.background = 'url("https://res.cloudinary.com/dxfkurrkj/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1660448960/cloud-sky-beautiful-cartoon-background-night-sky-with-colorful-clouds-flat-poster-or-flyer-cloudscape-panorama-700-178471967_e9ceq4.jpg")';
    }
    
    setTimeout(showTime, 1000);
    
}

showTime();