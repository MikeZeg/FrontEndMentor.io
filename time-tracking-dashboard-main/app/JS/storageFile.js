import {boxArr} from './moveBox.js';

console.log(localStorage)

// Variables global
let myData;

//get elements - create 6 elements and 
//      add to local storage to save the changes by user


// Function Local Storage -
//              check if empty
//              if not compare changes and display
//              save changes if user do any movement.

export function saveStorage(arg1, arg2) {

    if(localStorage.length == 0){
        console.log('Local Sorage is empty')
    }else {
        console.log(localStorage.length)
        
        for(let i = 0; i < boxArr.length; i++) {
            // console.log(boxArr[i].id)
            // console.log(window.getComputedStyle(boxArr[i]).gridArea)
            // console.log(boxArr[i].id)
            
            // console.log('Local Storage:' + localStorage.getItem(boxArr[i].id))
            if(window.getComputedStyle(boxArr[i]).gridArea === localStorage.getItem(boxArr[i].id) ){
                console.log('same')
            }else {
                console.log('Not same: ' + boxArr[i].id)

            }
        }

    }

}