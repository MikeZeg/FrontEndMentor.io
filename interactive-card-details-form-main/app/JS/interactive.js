// alert('work')
// Check date - That date is minium to add in Input
let date = new Date();
    
let getYear = date.getFullYear();
let getMonth = date.getMonth()+1; 
console.log(getMonth + ' / ' + getYear)

// Date variables 
    let month = String(date.getMonth()+1).padStart(2,'0');
    let year = String(getYear);
    let acctualDate = new Date();
    console.log(month + '/'+ year)

// Card Image Replace
const cardCvc = document.querySelector(".cards__image__1 span h2");
const cardNumber = document.querySelector(".cards__image__2__accountDetails h3");
const cardHolder = document.querySelector(".cards__image__2__accountDetails__bottom__name h4");
const cardExpDate = document.querySelector(".cards__image__2__accountDetails__bottom__expDate h4");
//Hidden info below input
const hiddenCardHolderName = document.querySelector('.hidden__cardHolderName');
const hiddenCardNumber = document.querySelector('.hidden__cardNumber');
const hiddenCvc = document.querySelector('.hidden__cvc')

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


// Main Function Function
const btnPress = () => {

    console.log('Work')
    // checkInputName();
    // checkInputNumber();
    checkInputCvc();
}

// check input data
    //Name - no blank, only letters
        const checkInputName = () =>{
            const name = catchCardName.value;
            const letters = /^[A-Za-z\s]+$/;

            if(name.length == 0){
                console.log('Empty space - action')
                hiddenCardHolderName.style.display = 'flex';
            }else if(!(name.match(letters))) {
                hiddenCardHolderName.innerHTML = 'Only letter'
                hiddenCardHolderName.style.display = 'flex'
            }else{
                console.log('No blank')
                hiddenCardHolderName.style.display = 'none';
            }

        }
    // Card Number - only digit, to short between 15-16
        const checkInputNumber = () => {
            const number = catchCardNumber.value
            const checkNumbers = /^[0-9]+$/;
            console.log(number);

            if(number.length === 0){
                hiddenCardNumber.style.display = 'flex';
                hiddenCardNumber.innerHTML = 'Please add card Number';

            }else if(!(number.match(checkNumbers))){
                hiddenCardNumber.style.display = 'flex';
                hiddenCardNumber.innerHTML = 'Only Numbers';

            }else if(number.length < 14){
                hiddenCardNumber.style.display = 'flex';
                hiddenCardNumber.innerHTML = 'Number to short, Please check'
            }else{
                hiddenCardNumber.style.display = 'none';
            }
        }
    // Card CVC
        const checkInputCvc = () => {
            const cvc = catchCvc.value;
            const checkNumbers = /^[0-9]+$/;
            
            if(cvc.length === 0 ) {
                console.log(cvc)
                hiddenCvc.style.display = 'flex';
            }else if(cvc.length <= 2) {
                console.log(cvc);
                hiddenCvc.style.display = 'flex';
                hiddenCvc.innerHTML = 'To short';
            }else{

                if(!(cvc.match(checkNumbers))){
                    console.log(cvc);
                    hiddenCvc.style.display = 'flex';
                    hiddenCvc.innerHTML = 'Only Digit';

                }else{
                    hiddenCvc.style.display = 'none';
                }
                
            }
            
        }
    // Expire date
        const checkDate = () => {
            const month = catchCardExpMonth.value;
            const year = catchCardExpYear.value;
            console.log(month);
            console.log(year);
        }
    

// Wrong data - change windows values