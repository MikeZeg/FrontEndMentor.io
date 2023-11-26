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

// check if can push data to div name and keep data for period time x3, if not ...? start over
// make IF on the begin of FOR and make other arr with name of div
function myfun (period) {
    let period1 = period;



    console.log(period)
    // check forEach()
    for(let i=0; i<myData.length; i++){
        console.log('Round: ' + [i] )

        let day1 = myData[i].timeframes.daily.current;
        let day2 = myData[i].timeframes.daily.previous;
        
        let week1 = myData[i].timeframes.weekly.current;
        let week2 = myData[i].timeframes.weekly.previous;

        let month1 = myData[i].timeframes.monthly.current;
        let month2 = myData[i].timeframes.monthly.previous;

        console.log('Day current: ' + day1 + ". Day previous: " + day2 + ". Week current: " + week1 + ". Week previous: " + week2 + ". Month current: " + month1 + ". Month previous: " + month2 );


//if dayli add day if weekly add week ...
// add for all div solo because [i] - will give you last in that number in arr,
        if (period1 === 'daily') {
            workNow.innerHTML = myData[0].timeframes.daily.current;
            workLast.innerHTML = myData[0].timeframes.daily.previous;
            playNow.innerHTML = day1;
            playLast.innerHTML = day2;
            studyNow.innerHTML = day1;
            studyLast.innerHTML = day1;
            exerciseNow.innerHTML = day1;
            exerciseLast.innerHTML = day1;
            socialNow.innerHTML = day1;
            socialLast.innerHTML = day1;
            selfCareNow.innerHTML = day1;
            selfCareLast.innerHTML = day1;
        }if (period1 === 'weekly') {
            
        } if (period1 === 'monthly') {
            
        } else {
            console.log('nooooooooooooo')
        }
    }   
}

// add that event to main function to push data when CLICK
catchDaily.addEventListener('click', (e)=>{
    // alert('work daily');
    catchDaily.style.color= "black";
    myfun('daily');
});
catchWeekly.addEventListener('click', (e)=>{
    myfun('weekly')
});
catchMonthly.addEventListener('click', (e)=>{
    myfun('monthly');
});