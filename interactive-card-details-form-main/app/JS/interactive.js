// alert('work')

// Date variables 
    let month = '01';
    let year = '99';

// Card Image Replace
const cardCvc = document.querySelector(".cards__image__1 span h2");
const cardNumber = document.querySelector(".cards__image__2__accountDetails h3");
const cardHolder = document.querySelector(".cards__image__2__accountDetails__bottom__name h4");
const cardExpDate = document.querySelector(".cards__image__2__accountDetails__bottom__expDate h4");

// change dispaly details
cardCvc.innerHTML = '123';
cardNumber.innerHTML = '0000 0000 0000 0000';
cardHolder.innerHTML = 'Adam Smith';
// cardExpDate.innerHTML = '';

// Card Input
const catchCardName = document.querySelector('#cardHolderName');
const catchCardNumber = document.querySelector('#cardNumber');
const catchCardExpMonth =document.querySelector('#cardExpireMonth');
const catchCardExpYear = document.querySelector('#cardExpireYear');
const catchCvc = document.querySelector('#cvc');

//AddEventListenre
    catchCardName.addEventListener('input',(e)=>{
        cardHolder.textContent = e.target.value;
    });
    catchCvc.addEventListener('input',(e)=>{
        cardCvc.textContent = e.target.value;
    });
// Date
    catchCardExpMonth.addEventListener('input',(e)=>{
        month = catchCardExpMonth.value;
        cardExpDate.innerHTML = month +'/'+year ;
        
    });
    catchCardExpYear.addEventListener('input',(e)=>{
        year = catchCardExpYear.value;
        cardExpDate.innerHTML = month +'/'+year ;
    });
// Card Number
    catchCardNumber.addEventListener('input',(e)=>{
        cardNumber.textContent = e.target.value;
    })
    

cardExpDate.innerHTML = month +'/'+ year;


// Function
const btnPress = () =>{

    console.log('Work')
    checkInputName();
    


}

// check input data
    //Name
        const checkInputName = () =>{
            const name = catchCardName.value;
            console.log(name);

            if(name !== blank){

            }

        }
    // Card Number
        const checkInputNumber = () => {
            const number = catchCardNumber.value
            console.log(number)
        }
    // Card CVC
        const checkInputCvc = () => {
            const cvc = catchCvc.value;
            console.log(cvc)
        }
    // Expire date
    

// Wrong data - change windows values