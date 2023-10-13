// alert('work')

// //variable
// let expMonth = '';
// let expYear = '';
// let cardFullName = '';

// catch  - check ????
const cardCvc = document.querySelector(".cards__image__1 span h2");
const cardNumber = document.querySelector(".cards__image__2__accountDetails h3");
const cardHolder = document.querySelector(".cards__image__2__accountDetails__bottom__name h4");
const cardExpDate = document.querySelector(".cards__image__2__accountDetails__bottom__expDate h4");

// change dispaly details
cardCvc.innerHTML = '123';
cardNumber.innerHTML = '1111 1111 1111 1111 1111';
cardHolder.innerHTML = 'My name iss.....';

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


catchCardExpYear.addEventListener('input',(e)=>{
    expDate = e.target.value;
});
catchCvc.addEventListener('input',(e)=>{
    cardCvc.textContent = e.target.value;
});

const btnPress = () =>{

    cardCvc.innerHTML = '123';
    cardNumber.innerHTML = '1111 1111 1111 1111 1111'
}

