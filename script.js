let title = document.createElement("h1");
document.body.append(title);
let text = "prout";
let i = 0;

function typeWord() {
    if (i < text.length) {
        title.innerHTML += text.charAt(i);
        i++
    } else {
        clearInterval();
    }
}

setInterval(typeWord, 500);


let timeStamp = document.createElement("h2");
document.body.appendChild(timeStamp);

let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

function displayTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    if (hours == 24) {
        hours = 0;
        days++;
    }
    timeStamp.innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
}
setInterval(displayTime, 1000);