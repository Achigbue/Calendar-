const monthEl = document.querySelector('.date h1');
const fulldateEl = document.querySelector('.date p');


const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 2, 0).getDate();
console.log(lastDay)


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
];

monthEl.innerText = months[monthInx];
fulldateEl.innerText = new Date().toDateString();