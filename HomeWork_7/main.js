

function SetTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let idTime = document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
    
}
setInterval(SetTime,1000);


