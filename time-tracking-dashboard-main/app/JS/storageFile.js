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
            box.style.gridArea = localStorage.getItem(window.getComputedStyle(box).gridArea)
        });
    }
},10);

// save Data in local storage
export function saveStorage(arg1, arg2, arg3, arg4) {

    localStorage.setItem(arg1,arg4)
    localStorage.setItem(arg2,arg3)
}