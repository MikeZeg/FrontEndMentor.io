// import
import {boxArr} from './moveBox.js';

// Variables scope file
let myData;
let boxes;

// variables import asynchronously
setTimeout(()=>{
    // console.log(boxArr);
    let boxes = [...boxArr]
},10);


// function to check local Storage
    // if local storage have data
    // if same as the render
    // swap windows between if diffrent

export function checkStorage() {
    if(!localStorage){
        console.log("Local Storage empty")
    }else {
        console.log("Compare with local storage: ")
        console.log(localStorage)
    }   
}


// save Data in local storage
    // 
export function saveStorage(arg1, arg2) {

    if(localStorage.length == 0){
        console.log('Local Sorage is empty')
    }else {
        console.log(localStorage.length)
    }        
}

    

// Start
checkStorage();