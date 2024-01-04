// import
import {boxArr} from './moveBox.js';


// variables import asynchronously
setTimeout(()=>{
    let boxes = [...boxArr]
    if(!localStorage.length){
        console.log('Local Storage Empty')
        boxes.forEach((box)=>console.log(window.getComputedStyle(box).gridArea))

        boxes.forEach((box)=>localStorage.setItem(
                        window.getComputedStyle(box).gridArea,
                        window.getComputedStyle(box).gridArea
                        ));
        return ' ';
    }else {
        // console.log("not empty: "+localStorage)
        console.log(boxes)
        boxes.forEach((box,i)=>{
            // console.log(window.getComputedStyle(box).gridArea)

            console.log(localStorage.getItem(window.getComputedStyle(box).gridArea) + ' These is value')
            console.log(localStorage.getItem(window.getComputedStyle(box).gridArea))
            box.style.gridArea = localStorage.getItem(window.getComputedStyle(box).gridArea)
        });
    }
},10);

// save Data in local storage
export function saveStorage(arg1, arg2) {
    // console.log(`${arg1.style.gridArea} to jest argument pierwszy`)
    // console.log(`${arg2.style.gridArea} to jest argument drugi`)
    localStorage.setItem(arg2.style.gridArea,arg1.style.gridArea)
    localStorage.setItem(arg1.style.gridArea,arg2.style.gridArea)
    
}