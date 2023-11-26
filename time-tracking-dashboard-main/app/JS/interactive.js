// JSON
import data from '../../data.json'assert {type: 'json'};
console.log(data);

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

        // check what period/tiem are pressed
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
    
    catchDaily.style.color= "black";
    myfun('daily');
});
catchWeekly.addEventListener('click', (e)=>{
    myfun('weekly')
});
catchMonthly.addEventListener('click', (e)=>{
    myfun('monthly');
});

// Info
    // workNow.innerHTML = myData[0].timeframes.daily.current;
    // workLast.innerHTML = myData[0].timeframes.daily.previous;
    // playNow.innerHTML = day1;
    // playLast.innerHTML = day2;
    // studyNow.innerHTML = day1;
    // studyLast.innerHTML = day1;
    // exerciseNow.innerHTML = day1;
    // exerciseLast.innerHTML = day1;
    // socialNow.innerHTML = day1;
    // socialLast.innerHTML = day1;
    // selfCareNow.innerHTML = day1;
    // selfCareLast.innerHTML = day1;