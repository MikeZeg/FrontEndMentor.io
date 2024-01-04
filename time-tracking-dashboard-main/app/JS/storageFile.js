// import
import {boxArr} from './moveBox.js';


// variables import asynchronously
setTimeout(()=>{
    if(!localStorage.length){
        console.log('Local Storage Empty')
        return ' ';
    }else {
        console.log(localStorage)
    let boxes = [...boxArr]
        console.log(boxes)
        boxes.forEach((box,i)=>{
            console.log(window.getComputedStyle(box).gridArea)
            console.log(localStorage.key(i))
            box.style.gridArea = localStorage.key(i)
        });
    }
},10);

// save Data in local storage
export function saveStorage(arg1, arg2) {

    if(localStorage.length == 0){
        console.log('Local Sorage is empty')
    }else {
        // console.log(localStorage.length)
    }        
}