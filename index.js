let date;
let hours;
let mins;
let seconds;
let daysStr;
let days;
let dates;


let time;
let dayAndDate;

setInterval(() => {
  date = new Date();
  hours = date.getHours();
  mins = date.getMinutes();
  seconds = date.getSeconds();
  time = hours + ":" + mins + ":" + seconds;

  document.getElementById('time').innerHTML = time;

  daysStr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  days = daysStr[date.getDay()];

  dates = date.toLocaleDateString();

  dayAndDate = days + ", " + dates;
  document.getElementById('dayDate').innerHTML = dayAndDate;
}, 1000);