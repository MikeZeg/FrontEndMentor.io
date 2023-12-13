// global
let active = false;

// TASK
// add dragEventStart to div or can be allready over that div-s?
// add cursor: move;
//
    //-----------------------------------------
// Box Grab
    // const work_Grab = document.querySelector('.work .grab');
    // console.log(work_Grab);
    // const play_Grab = document.querySelector('.play .grab')
    // console.log(play_Grab);

// boxes 
const workBox = document.querySelector('.work');
const playBox = document.querySelector('.play');
const studyBox = document.querySelector('.study');
const exerciseBox = document.querySelector('.exercise');
const socialBox = document.querySelector('.social');
const selfCareBox = document.querySelector('.selfCare');

const boxArr = [workBox, playBox, studyBox, exerciseBox,socialBox,selfCareBox]
//--------------------------------------------------
// Start
    let items = document.querySelectorAll('.grab')
    items.forEach((item)=> item.addEventListener('click', pressDotts))

function pressDotts(e) {

// Pressed Dotts - active boxe's movment
    if(active != true){
        boxArr.forEach((item)=>{
            item.setAttribute('draggable', true);
        })
        // Plus info ?
        items.forEach((item)=>{
            item.innerHTML = 'move box';
            item.classList.add('pressDotts');
        });
        active = true;
        console.log('after press: '+active)
    }else{
        boxArr.forEach((item)=>{
            item.setAttribute('draggable', false);
        })
        // Plus info ?
        items.forEach((item)=>{
            item.innerHTML = '...';
            item.classList.remove('pressDotts');
            active = false;
        });
    }
// change for all 
    // boxArr.forEach((box)=>{
    //     box.addEventListener('mousedown', onDragStart)
    //     box.addEventListener('mouseup', onDrop);
    //     box.addEventListener('dragover',onDragOver);
    //     box.addEventListener('dragleave', dragleave);
    //     box.addEventListener('drop', onDrop);
    // })

}
// Supporting functions
    //Drag Start
function onDragStart(e) {

}
// Over that point 
function onDragOver(e) {
    
    this.classList.add('over');
    e.preventDefault();
    return false;
}
//Drag leave
function dragleave(e) {

    this.classList.remove('over');
}
// Dorp on point
function onDrop(e) {

    workBox.style.opacity = '1';
    workBox.setAttribute('draggable',false);

    boxArr.forEach((box)=> {
        box.style.opacity= '1';
        box.classList.remove('over');
    })

    e.stopPropagation();
    return false;
}