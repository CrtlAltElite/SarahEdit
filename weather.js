



async function getWeather(city) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=9a67ef8ff2feec94b5987d22521e868d
        `);
        console.log(response.data);
        showWeather(response.data);

    } catch (error) {
        console.error(error);
    }
}

//getWeather('canon', KEY)


function showWeather(data){
    let high = data.main.temp_max
    let low = data.main.temp_min
    let forcast = data.weather[0].main
    let humidity = data.main.humidity
    let icon= data.weather[0].icon
    console.log(icon)
    document.getElementsByClassName("results")[0].style.display="block"
    document.getElementById("cname").innerHTML=data.name
    document.getElementById("current").innerHTML=data.main.temp+ ' &#176;F'

    document.getElementById("high").innerHTML=high + ' &#176;F'
    document.getElementById("low").innerHTML=low + ' &#176;F'
    document.getElementById("forcast").innerHTML=forcast
    document.getElementById("humidity").innerHTML=humidity+ "%"
    document.getElementById("icon").innerHTML=`<img src=https://openweathermap.org/img/wn/${icon}@2x.png>`
   // iconImg.src = iconUrl;

}


const form = document.querySelector('#form')
form.addEventListener('submit', (event) => {
    console.log('clicked')
    event.preventDefault();
    let city = document.getElementById('city');
    console.log(city.value);
    getWeather(city.value)
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
    let dates = mm+"/"+dd+"/"+year + " ";
    const mcd=document.getElementById("MyClockDisplay")
    mcd.innerHTML = time +"<br>" + dates;
    mcd.style.fontSize="large"
    mcd.style.fontWeight="bold"
    mcd.style.position="fixed"
    mcd.style.top="1em"
    mcd.style.right="0em"

    
    setTimeout(showTime, 1000);
    
}

showTime();
