
var items;
var draggedItem = null;

//check for one or each box

// TASK
// add dragEventStart to div or can be allready over that div-s?
// 

// Box Grab
    const workGrab = document.querySelector('.work .grab');
    console.log(workGrab);
    const playGrab = document.querySelector('.play .grab')
    // console.log(playGrab);


// add event listener
    workGrab.addEventListener('click', dragEventStart);
    playGrab.addEventListener('click',dragEventStart);

//boxes 
    const workBox = document.querySelector('.work');
    const playBox = document.querySelector('.play');


// support Function
        // mark by change color all div, mark grid-area, 
        // to div need be add function "ondragstart", "draggable",
        //
    function dragEventStart(event) {
        workBox.style.backgroundColor = 'white';
        this.style.color = 'red'
    }
        //  second function need be add "preventDefault",
        // that beheivor need be add to target element.
    function onDragOver(event) {
        event.preventDefault();
    }
        // that function must be add to target box
        // last one change data between boxes
        //
    function onDrop(event){

        // const draggAbleElelemnt = documentElementById('.play .grab')
        // const dropZone = event.target
        // dropZone.appendChild(draggAbleElement);

        event.dataTransfer;
        event.clearDtata();
    }


// Main function

    // List
    // grab elements - 
        // var boxes = document.querySelectorAll('.container .box');
    // grab elements - 
        // var grab = document.querySelectorAll('.grab'); 

        // grab.forEach((item)=> 

        //     item.addEventListener('click', changeOpacity)
        
        // )

//Support Functions - change Opacity, add dragover, remove dragover, 
    // change location - by change grid-area:
    // made if grab style is dragover do same for boxes ?
    //  
    // function changeOpacity(e){
    //     this.style.opacity = '0.5';
    //     this.style.color = 'red';
    //     console.log(this);
    // }


// For each boxes
// document.addEventListener("DOMContentLoaded", event => {
//     const items = document.querySelectorAll('.container .box');
//     // console.log(items);
//     items.forEach(function(item){
//         console.log(item)
//     });
// })