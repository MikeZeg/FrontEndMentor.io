// alert('working ?')
// console.log('connect ')

// API -> URL
const urlApi = "https://api.adviceslip.com/advice";

// Advice - value change
const adviceNumber = document.querySelector('.advice__card__container__number');
const adviceText = document.querySelector('.advice__card__container__text');

// Btn
const button = document.querySelector('.btn');



// Function/s
const btnPress = async()=>{
    console.log('Working')

    const res = await fetch(urlApi);
    const data = await res.json()

    const slipId = data.slip.id;
    const slipText = data.slip.advice;

    console.log(data);
    console.log(slipId);

    adviceNumber.innerHTML = slipId;
    // or advceNumber.innerHTML = `Advice #${slipId}`
    adviceText.innerHTML = slipText;
    // or adviceText.innerHTML = `"${slipText}"`
}

// check function/s

    // function checkFun (){
    //     btnPress()

    //     setTimeout(checkFun,3000);
    // }
    // checkFun();