// alert('Working');

//hooks
const btnQuestion = document.querySelector('#btnSubmit');
let myDigit = document.querySelectorAll('.digit');

// import styles from '../styles/styles.css';


// mark digit
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
btnQuestion.addEventListener('click', function(){
    console.log('mam');
    
})