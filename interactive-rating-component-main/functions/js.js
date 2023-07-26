
// import styles from '../styles/styles.css';
// ---------------------------------------------

//Selected Digit
const selectedDigit = '0';
const 

// mark digit
   //hooks
    const btnQuestion = document.querySelector('#btnSubmit');
    let myDigit = document.querySelectorAll('.digit');

myDigit.forEach(function(elem){

    elem.addEventListener("click", function(){
        myDigit.forEach(function(backTo){
            backTo.style = "background-color:$darkBlue; color:$lightGrey";
        });
        this.style = "background-color:grey; color:white";
        // this.style.backgroundColor = styles.lightGrey;
        // this.style.color = styles.myWhite;
    })
})

// Change to thank you state
    //hooks
    const question = document.querySelector('.question');
    const answer  = document.querySelector('.answer');



btnQuestion.addEventListener('click', function(){

    question.style.display = 'none';
    answer.style.display = 'grid';
    
})