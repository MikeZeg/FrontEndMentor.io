// import
import {boxArr} from './moveBox.js';

// Check bug with moving same box second time, why other boxes losing value gridArea


// variables import asynchronously
setTimeout(()=>{
    let boxes = [...boxArr]
    if(!localStorage.length){
        console.log('Local Storage Empty')
        // boxes.forEach((box)=>console.log("to jest wartosc box: "+window.getComputedStyle(box).gridArea))
        // boxes.forEach((box)=>console.log("To jest ID: "+box.id))
        boxes.forEach((box)=>localStorage.setItem(
                        box.id,
                        window.getComputedStyle(box).gridArea
                        ));
        return ' ';
    }else {
        // console.log("not empty: "+localStorage)
        // console.log(boxes)
        boxes.forEach((box,i)=>{
            // console.log(window.getComputedStyle(box).gridArea)
            // console.log("to jest ID: "+window.getComputedStyle(box).id)
            // console.log(localStorage.getItem(window.getComputedStyle(box).gridArea) + ' These is value')
            // console.log(localStorage.getItem(window.getComputedStyle(box).gridArea))
            box.style.gridArea = localStorage.getItem(window.getComputedStyle(box).gridArea)
        });
    }
},10);

// save Data in local storage
export function saveStorage(arg1, arg2,arg3) {
    // console.log(`${arg1.style.gridArea} to jest argument pierwszy`)
    // console.log(`${arg2.style.gridArea} to jest argument drugi`)
// check arguments what is what - id I boxa i wartos a pozneij II id boxa i wartosc
    
    console.log('It swaping element:' + arg1.style.gridArea)
    console.log('It catche element:' + arg2.id)
    console.log('It other value:' + arg3)
    
    localStorage.setItem(arg2.id, arg1.style.gridArea)
    localStorage.setItem(arg1.style.gridArea,arg3 )
}