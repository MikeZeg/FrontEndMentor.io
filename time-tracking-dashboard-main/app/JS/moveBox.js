// TASK
// add dragEventStart to div or can be allready over that div-s?
// 
//-----------------------------------------
// Box Grab
    const work_Grab = document.querySelector('.work .grab');
    console.log(work_Grab);
    const play_Grab = document.querySelector('.play .grab')
    console.log(play_Grab);

// boxes 
const workBox = document.querySelector('.work');
const playBox = document.querySelector('.play');
const studyBox = document.querySelector('.study');
const exerciseBox = document.querySelector('.exercise');
const socialBox = document.querySelector('.social');
const selfCareBox = document.querySelector('.selfCare');
//--------------------------------------------------
// Start
function onDragStart(e) {
    workBox.style.opacity = '0.4';
    workBox.setAttribute('draggable',true);
    
}
// Over to point 
function onDragOver(e) {
 
}
// Dorp
function onDrop(e){

    workBox.style.opacity = '1';
    workBox.setAttribute('draggable',false);
}
// add event listener - add forEach Main Function and add all functions
    let items = document.querySelectorAll('.grab');

    items.forEach((item)=> {
        item.addEventListener('mousedown',onDragStart);
        item.addEventListener('mouseup', onDrop)
    });