//elements form index.html
let monthEl = document.querySelector('.date h1')
let fullDateEl = document.querySelector('.date p')
let fullDaysEl = document.querySelector('.days')


const monthIndex = new Date().getMonth()//index of the months

//to get the last day of the month
let lastDay = new Date(new Date().getFullYear(), monthIndex +1, 0).getDate();

//to get the first day of the month/ because JS starts on sunday we deecreased by 1.
let firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() -1;

//Array of the months (note: to be used with monthIndex)
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]


monthEl.innerText = months[monthIndex]//changed the h1 text current month
fullDateEl.innerText = new Date().toDateString();//changed the p tag to current date

let days = '';// variable with an empty string/ value will be updated with for loop

//for emptey days
for (let i=firstDay; i>0; i--){
    days += `<div class='empty'></div>`;
}


//for loop will make the number of divs up until its = to the last day.
for (let i=1; i <= lastDay; i++){
    if(i === new Date().getDate()){
        days += `<div class='today'>${i}</div>`
    }else {
    days += `<div>${i}</div>`
    }
}
fullDaysEl.innerHTML = days;//we give the fullDaysEl selector the innterhtml value of days 