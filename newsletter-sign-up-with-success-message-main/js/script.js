//grab all section - main, hidden_page, email_input, button
const firstPart = document.querySelector('.main__firstPart');
const figurePart = document.querySelector('.main__figure');
const email = document.querySelector('#email_input');
const btnEmail = document.querySelector('#btnEmail');

const success = document.querySelector('.success');
const successEmail = document.querySelector('.success__info span');

// magic making: 
//  done 1) clear email when selected
//  2) change button color
//  done 3) Button press hide main content and add success content

email.addEventListener('click', function(){
    console.log('Access')
    email.value = ''
});

// done 1) check the correctness of email
// done 2) add email value to hidden page 
function contentChange (){
    const checkEmail = email.value;
    const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const easyMailFormat = /^\S+@\S+\.\S+$/;

//check email format
    if(checkEmail.match(easyMailFormat)){
        console.log('work');
    
        firstPart.style.display = 'none';
        figurePart.style.display = 'none';
        success.style.display = 'flex';
        successEmail.textContent = checkEmail;
    }else{
        alert('Please add correct Email. '+ checkEmail)
    }
}