
//grab all section - main, hidden_page, email_input, button
const main = document.querySelector('main')
const firstPart = document.querySelector('.main__firstPart');
const figurePart = document.querySelector('.main__figure');
const email = document.querySelector('#email_input');
const btnEmail = document.querySelector('#btnEmail');
const errorNote = document.querySelector('.main__secondPart__confirm__text span');
const emailInput = document.querySelector('#email_input');


const success = document.querySelector('.success');
const successEmail = document.querySelector('.success__info span');

// magic making: 

    email.addEventListener('click', function(){
        console.log('Access')
        email.value = ''
    });

    function contentChange (){
        const checkEmail = email.value;
        const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const easyMailFormat = /^\S+@\S+\.\S+$/;

    //check email format
        if(checkEmail.match(easyMailFormat)){
            console.log('work');
        
            main.style.minWidth = '25rem';
            main.style.maxWidth = '26rem'
            main.style.minHeight = '26rem';
            main.style.maxHeight = '27rem'

            firstPart.style.display = 'none';
            figurePart.style.display = 'none';
            success.style.display = 'flex';
            successEmail.textContent = checkEmail;
        }else{
// alert('Please add correct Email. '+ checkEmail)
            errorNote.style.display = 'flex';
            emailInput.style.color = $tomato;
            emailInput.style.backgroundColor = 'red';


        }
    }