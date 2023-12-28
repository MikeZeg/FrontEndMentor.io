console.log(localStorage)

// Variables global
let myData;

//get elements - create 6 elements and 
//              add to local storage to save the changes by user
const mainStyle = document.querySelector('main');


// Main Data - don't need? add one by one for change
myData = window.getComputedStyle(mainStyle).gridTemplateAreas;
console.log(myData)


// Function Local Storage -
//              check if empty
//              if not compare changes and display
//              save changes if user do any movement.

export function saveStorage(arg) {
    if(localStorage != false){
        console.log('Local Storage empty')

        localStorage.
    }else {
        console.log('Add' + arg)
    }
}