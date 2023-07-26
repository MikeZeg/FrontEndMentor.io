
// import styles from '../styles/styles.css';
// ---------------------------------------------

//Selected Digit
    const selectedDigit = [];
    // const addText = document.getElementsByClassName('answer_rating');
    const addText = document.getElementById('rating');
// mark digit
   //hooks
    const question = document.querySelector('.question');
    const answer  = document.querySelector('.answer');
    const btnQuestion = document.querySelector('#btnSubmit');
    let myDigit = document.querySelectorAll('.digit');

//Change styles ratings span
    myDigit.forEach(function(elem){

        elem.addEventListener("click", function(){
            myDigit.forEach(function(backTo){
                backTo.style = "background-color:$darkBlue; color:$lightGrey";
            });
            this.style = "background-color:grey; color:white";
            
            selectedDigit.slice(1)
            selectedDigit.push(this.innerText);
            // console.log(this.innerText);
            // console.log(selectedDigit);
        })
    })

// Change to thank you state
    //hooks
    btnQuestion.addEventListener('click', function(){

        if(selectedDigit.length === 0){
            alert('Please select Rating')
        }else{
            question.style.display = 'none';
            answer.style.display = 'grid';
            addText.innerText = 'You selected ' + selectedDigit[selectedDigit.length - 1] + ' out of 5';
        }
    })