import './style/main.scss'
import patternDesktop from './assets/images/patternDesktop.svg';
import star from './assets/images/icon-star.svg';

const backgroundImg = document.querySelector('body');
backgroundImg.src = patternDesktop;

const backgroundStar = document.getElementById('star');
backgroundStar.src = star;

const questionsArr = document.querySelectorAll('details')
const summarys = Array.from(document.querySelectorAll('details'));
let detailsIndex ;
    summarys.forEach((summary, index)=>{
        summary.addEventListener('click', (e) => {
            console.log('location: ', index)
            // detailsIndex = index;
            
            if(detailsIndex === index){
                console.log('clicked in same detail')
                detailsIndex = index;
                console.log(summary)
                summarys.forEach((summ)=> { summ.open = false; })
                summary.open = false;
            }if(detailsIndex != index) {
                console.log("clicked in other ")
                detailsIndex = index;
                summarys.forEach((summ)=> summ.open = false)
            }if(detailsIndex == null){
                console.log('first time clicked')
                detailsIndex = index;
            }
    })
    })