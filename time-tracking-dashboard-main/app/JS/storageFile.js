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
export function saveStorage(arg1, arg2, arg3) {
    
    // arg1 - box grabed - location Storage - key
    // agr2 - must be second box    
    // arg3 - it that location to go -location Storage - value 

    
    
    // localStorage.setItem(arg2.id, arg1.style.gridArea)
    // localStorage.setItem(arg1.style.gridArea,arg2.id)
    // localStorage.setItem(arg1.style.gridArea,arg3)

    // localStorage.setItem(arg1, arg1)
    // localStorage.setItem(arg3,arg2)
    // localStorage.setItem(arg1,arg3)
}