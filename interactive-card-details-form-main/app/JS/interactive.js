// alert('work')

// Card Image Replace
const cardCvc = document.querySelector(".cards__image__1 span h2");
const cardNumber = document.querySelector(".cards__image__2__accountDetails h3");
const cardHolder = document.querySelector(".cards__image__2__accountDetails__bottom__name h4");
const cardExpDate = document.querySelector(".cards__image__2__accountDetails__bottom__expDate h4");

// change dispaly details
cardCvc.innerHTML = '123';
cardNumber.innerHTML = 'xxx xxxx xxxx xxxx';
cardHolder.innerHTML = 'Adam Smith';
cardExpDate.innerHTML = 'dziala'

// year
let month = '010';
let year = '99';


// Card Input
const catchCardName = document.querySelector('#cardHolderName');

const catchCardNumber = document.querySelector('#cardNumber');

const catchCardExpMonth =document.querySelector('#cardExpireMonth');

const catchCardExpYear = document.querySelector('#cardExpireYear');

const catchCvc = document.querySelector('#cvc');

//AddEventListtenre
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

cardExpDate.innerHTML = month +'/'+ year;


// Function
const btnPress = () =>{

    
}

