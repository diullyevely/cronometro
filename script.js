const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")

let number = 0
let cron
let h1 = document.querySelector("h1")
function start (){
cron = setInterval ( function(){
number++
h1.innerHTML = number
}, 1000)
}
function stop (){
    clearInterval(cron)
}


button2.addEventListener("click", stop )
button1.addEventListener("click", start )