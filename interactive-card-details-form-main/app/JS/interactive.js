// alert('work')

// Check date/time
    let date = new Date();
    let getYear = date.getFullYear();
    let getMonth = date.getMonth()+1; 
    console.log(getMonth + ' / ' + getYear)
    // Date variables 
        let currentMonth = String(date.getMonth()+1).padStart(2,'0');
        let currentYear = String(getYear);
        let acctualDate = new Date();

// Success part 
    const successPage = document.querySelector(".successForm")
    const startPage = document.querySelector(".cardDetails");
// Card Image Replace - Injection HTML
    const cardCvc = document.querySelector(".cards__image__1 span h2");
    const cardNumber = document.querySelector(".cards__image__2__accountDetails h3");
    const cardHolder = document.querySelector(".cards__image__2__accountDetails__bottom__name h4");
    const cardExpDate = document.querySelector(".cards__image__2__accountDetails__bottom__expDate h4");
//Hidden info below input
    const hiddenCardHolderName = document.querySelector('.hidden__cardHolderName');
    const hiddenCardNumber = document.querySelector('.hidden__cardNumber');
    const hiddenCvc = document.querySelector('.hidden__cvc')
    const hiddenDate = document.querySelector('.hidden__expDate')
//Style injection
    const styleMonth = document.querySelector("#cardExpireMonth").style;
    const styleYear = document.querySelector('#cardExpireYear').style;
    const styleCvc = document.querySelector("#cvc").style;
    const styleCardNumber = document.querySelector("#cardNumber").style;
    const styleCardName = document.querySelector("#cardHolderName").style;

// Card Input
    const catchCardName = document.querySelector('#cardHolderName');
    const catchCardNumber = document.querySelector('#cardNumber');
    const catchCardExpMonth =document.querySelector('#cardExpireMonth');
    const catchCardExpYear = document.querySelector('#cardExpireYear');
    const catchCvc = document.querySelector('#cvc');

//AddEventListenre
    //Name
    catchCardName.addEventListener('input',(e)=>{
        cardHolder.textContent = e.target.value.toUpperCase();
    });
    catchCvc.addEventListener('input',(e)=>{
        cardCvc.textContent = e.target.value;
    });
    // Date
    catchCardExpMonth.addEventListener('input',(e)=>{
        month = catchCardExpMonth.value;
        year = catchCardExpYear.value;
        const checkMonth = /^(0[1-9]|1[0,1,2])+$/;

        if(!(month.match(checkMonth))){
            hiddenDate.style.display = 'flex'
            console.log('Wrong')
        }else if(month > 12){
            console.log('Date is incorrect')
            hiddenDate.style.display = 'flex'
        }else{
            cardExpDate.innerHTML = month + '/' + year;
            hiddenDate.style.display = 'none'
        }        
    });

    catchCardExpYear.addEventListener('input',(e)=>{
        year = catchCardExpYear.value;
        month = catchCardExpMonth.value;
        cardExpDate.innerHTML = month +'/'+ year ;
    });
    // Card Number
    catchCardNumber.addEventListener('input',(e)=>{
        cardNumber.textContent = e.target.value;
    })

// Main Function Function
const btnPress = () => {

    console.log('Main btn function Work')
    
    console.log('Pass start');
    let pass = false;

        checkInputName();
        checkInputNumber();
        checkInputCvc();
        checkDate();

/* Below Test by each function */
    /* From here  |    */
   /*             V   */
        if(checkInputName() != true){
            console.log('BTN - card name - eror')
            successPage.style.display = 'none';
            startPage.style.display = '';
        }else if(checkInputNumber() != true){
            console.log('BTN - Card Number - error')
            successPage.style.display = 'none';
            startPage.style.display = '';
        }else if(checkInputCvc() != true){
            console.log('BTN - Cvc - eror')
            successPage.style.display = 'none';
            startPage.style.display = '';
        }else if(checkDate() != true){
            console.log('BTN - Date - eror')
            successPage.style.display = 'none';
            startPage.style.display = ''; /*  <--- That code from above can be removed */
        }else if(checkDate() == true && checkInputCvc() == true && checkInputNumber() == true && checkInputName() == true){
            console.log('if statment in check BTN - pass')
            successPage.style.display = 'grid';
            startPage.style.display = 'none';
        }else {console.log('Error')}
}

// check input data
    //Name - no blank, only letters
        const checkInputName = () =>{
            const name = catchCardName.value;
            const letters = /^[A-Za-z\s]+$/;
            pass = true;

            if(name.length == 0){
                pass = false;
                console.log('Empty space - action')
                hiddenCardHolderName.style.display = 'flex';
                styleCardName.border = '1px solid red';
                console.log(pass+ "check Input name - length error") 
                return pass;
            }else if(!(name.match(letters))) {
                pass = false;
                hiddenCardHolderName.innerHTML = 'Only letter';
                hiddenCardHolderName.style.display = 'flex';
                styleCardName.border = '1px solid red';
                console.log(pass+ "check Input name - rex error")
                return pass;
            }else{
                pass = true;
                hiddenCardHolderName.style.display = 'none';
                styleCardName.border = '';
                
                console.log(pass+ "check Input name - pass all good");
                return pass;
            }
        }

    // Card Number - only digit, to short between 15-16
        const checkInputNumber = () => {
            const number = catchCardNumber.value
            const checkNumbers = /^[0-9]+$/;
            let pass = false;
            

            if(number.length === 0){
                pass = false
                hiddenCardNumber.style.display = 'flex';
                hiddenCardNumber.innerHTML = 'Please add card Number';
                styleCardNumber.border = '1px solid red';
                return pass;

            }else if(!(number.match(checkNumbers))){
                pass = false;
                hiddenCardNumber.style.display = 'flex';
                hiddenCardNumber.innerHTML = 'Only Numbers';
                styleCardNumber.border = '1px solid red';
                return pass;

            }else if(number.length < 14){
                pass = false;
                hiddenCardNumber.style.display = 'flex';
                hiddenCardNumber.innerHTML = 'Number to short, Please check';
                styleCardNumber.border = '1px solid red';
                return pass;
            }else{
                pass = true;
                hiddenCardNumber.style.display = 'none';
                styleCardNumber.border = '';
                return pass;
                
            }
        }

    // Card CVC
        const checkInputCvc = () => {
            const cvc = catchCvc.value;
            const checkNumbers = /^[0-9]+$/;
            let pass = false;
            
            if(cvc.length === 0 ) {
                pass = false;
                console.log(cvc)
                hiddenCvc.style.display = 'flex';
                styleCvc.border = '1px solid red';
                return pass;
            }else if(cvc.length <= 2) {
                pass = false;
                console.log(cvc);
                hiddenCvc.style.display = 'flex';
                hiddenCvc.innerHTML = 'To short';
                styleCvc.border = '1px solid red';
                return pass;
            }else{
                if(!(cvc.match(checkNumbers))){
                    pass = false;
                    console.log(cvc);
                    hiddenCvc.style.display = 'flex';
                    hiddenCvc.innerHTML = 'Only Digit';
                    styleCvc.border = '1px solid red';
                    return pass = false;
                }else{
                    pass = true;
                    hiddenCvc.style.display = 'none';
                    styleCvc.border = '';
                    return pass;
                }
            }
        }

    // Expire date
        const checkDate = () => {
            const month = catchCardExpMonth.value;
            const year = catchCardExpYear.value;
            const checkMonth = /^(0[1-9]|1[0,1,2])+$/;
            const checkYear = /^(0[2-9]|[0-9])+$/;
            let dateFlag = false;
            let pass = false;

            if(month.length === 0 ){
                console.log("Can't be blank")
                hiddenDate.style.display = 'flex';
                styleMonth.border = '1px solid red'; 
                styleYear.border = '1px solid red';
                dateFlag = false;
                pass = false;
            }else if(!(month.match(checkMonth))){
                console.log('Wrong date')
                hiddenDate.style.display = 'flex';
                styleMonth.border = '1px solid red'; 
                dateFlag = false;
                pass = flase;
            }else{
                hiddenDate.style.display = 'none';
                styleMonth.border = '';
                dateFlag = true;
                pass = true;
            } 
            
            if(year < currentYear){
                console.log("add correct date / year")
                console.log(currentYear);
                hiddenDate.style.display = 'flex';
                hiddenDate.innerHTML = 'Add correct date' 
                styleYear.border = '1px solid red';
                dateFlag = false;
                pass = false;
                
            }else{
                hiddenDate.style.display = 'none';
                styleYear.border = ''
                pass = true;   
            }
        const checkDateFlag = dateFlag != true ? hiddenDate.style.display= 'flex' : hiddenDate.style.display= 'none';
        return pass;
        }
