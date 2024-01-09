setInterval(() => {
  var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var months = [
    "JAN",
    "FED",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  var d = new Date();

  document.querySelector(".hours").innerHTML = d.getHours();
  document.querySelector(".minute").innerHTML = d.getMinutes();
  document.querySelector(".sec").innerHTML = d.getSeconds();
  document.querySelector(".ampm").innerHTML = "PM";

  document.querySelector(".day").innerHTML = days[d.getDay()];
  document.querySelector(".currentdate").innerHTML = d.getDate();
  document.querySelector(".month").innerHTML = months[d.getMonth()];
  document.querySelector(".year").innerHTML = d.getFullYear();
}, 1000);
