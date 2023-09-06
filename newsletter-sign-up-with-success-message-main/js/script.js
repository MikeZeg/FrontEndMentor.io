//grab all section - main, hidden_page, email_input, button
const mainPage = document.querySelector('.main');
const success = document.querySelector('.success');
const email = document.getElementById('email_input');
const btnEmail = document.querySelector('#btnEmail');
const figure = document.querySelector('figure');




// magic making: 
//  1) clear email when selected
//  2) change button color
//  3) Button press hide main content and add success content

function contentChange (){

    console.log('work')
//     mainPage.classList.add(hidde__style);
//     success.classList.add(display__style);
// }