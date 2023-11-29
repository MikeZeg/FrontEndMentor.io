
// JSON
import data from '../../data.json' assert {type: 'json'};
// import data from '../../data.json';
const myData = data;

// catch links - Selection options Daily, Weekly, Monthly
const catchDaily = document.querySelector('#daily__list');
const catchWeekly = document.querySelector('#weekly__list');
const catchMonthly = document.querySelector('#monthly__list');

//Catch link div - work, play, study ...
    //work
    const workNow = document.querySelector('.work__details__info h2');
    const workLast = document.querySelector('.work__details__info h3 span');
    //Play
    const playNow = document.querySelector('.play__details__info h2');
    const playLast = document.querySelector('.play__details__info h3 span');
    //Study
    const studyNow = document.querySelector('.study__details__info h2');
    const studyLast = document.querySelector('.study__details__info h3 span');
    //Exercise
    const exerciseNow = document.querySelector('.exercise__details__info h2');
    const exerciseLast = document.querySelector('.exercise__details__info h3 span');
    //Social
    const socialNow = document.querySelector('.social__details__info h2');
    const socialLast = document.querySelector('.social__details__info h3 span');
    //Self Care
    const selfCareNow = document.querySelector('.selfCare__details__info h2');
    const selfCareLast = document.querySelector('.selfCare__details__info h3 span');

// Main Funtion
function myfun (period) {
    let period1 = period;

    // Created 2 arrays 
    const divArrNow = [workNow, playNow, studyNow, exerciseNow, socialNow, selfCareNow];
    const divArrLast = [workLast,playLast,studyLast,exerciseLast,socialLast,selfCareLast];

    console.log(period)
    // check forEach() - to speed up algorithm - can check what time period was pressed to looking only that in DATA.json
    for(let i=0; i < myData.length; i++){
        console.log('Round: ' + [i] )

        let day1 = myData[i].timeframes.daily.current;
        let day2 = myData[i].timeframes.daily.previous;
        
        let week1 = myData[i].timeframes.weekly.current;
        let week2 = myData[i].timeframes.weekly.previous;

        let month1 = myData[i].timeframes.monthly.current;
        let month2 = myData[i].timeframes.monthly.previous;

        // check what period/time are pressed
            if (period1 === 'daily') {
                console.log('Daily: current: '+day1+', last: '+day2)
                divArrNow[i].innerHTML = day1;
                divArrLast[i].innerHTML = day2;
                
            }if (period1 === 'weekly') {
                console.log('Weekly: current: '+day1+', last: '+day2)
                divArrNow[i].innerHTML = week1;
                divArrLast[i].innerHTML = week2;
                
            } if (period1 === 'monthly') {
                console.log('Mothly: current: '+day1+', last: '+day2)
                divArrNow[i].innerHTML = month1;
                divArrLast[i].innerHTML = month2;
            } else {
                console.log('nooooooooooooo')
            }
    }   
}

// add that event to main function to push data when CLICK
catchDaily.addEventListener('click', (e)=>{
    myfun('daily');
    catchDaily.style.color += 'color: white';
    catchWeekly.style.color += 'color: hsl(236, 100%, 87%)';
    catchMonthly.style.color += 'color: hsl(236, 100%, 87%)';
    
});
catchWeekly.addEventListener('click', (e)=>{
    myfun('weekly')
    catchDaily.style.color += "color: hsl(236, 100%, 87%)";
    catchWeekly.style.color += 'color: white';
    catchMonthly.style.color += 'color: hsl(236, 100%, 87%)';
});
catchMonthly.addEventListener('click', (e)=>{
    myfun('monthly');
    catchDaily.style.color += 'color: hsl(236, 100%, 87%)';
    catchWeekly.style.color += 'color: hsl(236, 100%, 87%)';
    catchMonthly.style.color += 'color: white';
});

//
let hoverOff = `.hover {color:white}`
let hoverOn = `.list {color:$paleBlue; &:hover {color:$whiteBorder;coursor:pointer}}`