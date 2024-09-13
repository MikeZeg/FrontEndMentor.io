import './style/main.scss'
import patternDesktop from './assets/images/patternDesktop.svg';
import star from './assets/images/icon-star.svg'

const backgroundImg = document.querySelector('body')
backgroundImg.src = patternDesktop;

const backgroundStar = document.getElementById('star');
backgroundStar.src = star;

const questionsArr = document.querySelectorAll('details')
const summarys = Array.from(document.querySelectorAll('details'));

    summarys.forEach((summary)=>{
        //if same detail clicked change 0
        let flag = 1;
        summary.addEventListener('click', (summary) => {
            arr.forEach((close)=>{
                close.open = false
                console.log('These close: ', close)
            })
            if(flag >= 1){
                summary.open = false;
            }else{
                summary.open = true
                console.log('that open: ',summary)
            }
        })
    })