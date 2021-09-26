var city;
var icon = document.getElementById("change-icon");
var iconContainer = document.getElementById("icon");
var errorMsg = document.getElementById("error-msg");
var error = document.getElementById("error");
var output = document.getElementById("temprature");
var detail = document.getElementById("detail");

var data = undefined;
var months = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN", 
           "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

document.getElementById("submit").onclick = (e)=>{
    e.preventDefault();
    city = document.getElementById("search").value;
    if(city == ""){
        icon.src = "../public/images/"+"empty.png"
        iconContainer.style.animation = "scale 1s infinite linear"
        errorMsg.innerText ="Search Box is empty"
    }
    else{
        Search();
    }
}

var Search = async ()=>{
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a38e65d196b7becc74033c4b3359dd2d`
    let response = await fetch(url);
    data = await response.json()
    console.clear()
    if(data.cod == "404")
    {
        if(detail.classList.contains("detail")){
            detail.classList.remove("detail");
        }
        
        if(error.classList.contains("none")){
            error.classList.remove("none");
        }
        if(!error.classList.contains("detail"))
            error.classList.add("detail");
        
        icon.src = "../public/images/"+"notfound.png"
        iconContainer.style.animation = "myOrbit 2s infinite linear";
        errorMsg.innerText ="No such place exisit";
    }
    else 
        changeOutput();
}

var changeOutput = ()=>{
    var currentDate = new Date()
    var date = currentDate.getDate() +"|"+months[currentDate.getMonth()]+"|"+(currentDate.getFullYear()-2000);    
    if(data.weather[0].main=="Haze")
    data.weather[0].main = "mist";
    
    
    if(data.weather[0].icon[2]=='n')
        var currentIcon = "../public/images/"+data.weather[0].main.toLowerCase() + " dark.png";
    else
        var currentIcon = "../public/images/"+data.weather[0].main.toLowerCase() + ".png";
    

    var temprature = data.main.temp;
    // removing error page
    error.classList.remove("detail");
    error.classList.add("none");

    // enabling output window
    detail.classList.add("detail")
    icon.src = currentIcon;
    output.innerHTML = temprature+"<sup>0</sup>C"
    document.getElementById("others").innerText = date;

    // adding transition
    var transition;
    if(data.weather[0].main.toLowerCase() == "snow")
        transition = "snow 2s infinite linear"
    else if(data.weather[0].main.toLowerCase() == "mist")
        transition = "shift 10s infinite linear"    
    else if(data.weather[0].main.toLowerCase() == "clear")
        transition = "earth 6s infinite linear"
    else
        transition = "scale 2s infinite linear"
    iconContainer.style.animation = transition;
}