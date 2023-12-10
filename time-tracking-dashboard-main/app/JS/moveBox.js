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
function onDragStart(e) {
    workBox.style.opacity = '0.4';
    workBox.setAttribute('draggable',true);

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    
}
// Over to point 
function onDragOver(e) {
    this.classList.add('over');

//?
    e.preventDefault();
    return false;
}
//Drag leave
function dragleave(e) {
    this.classList.remove('over');
}
// Dorp
function onDrop(e){

    workBox.style.opacity = '1';
    workBox.setAttribute('draggable',false);

    boxArr.forEach((box)=> {
        box.style.opacity= '1';
        box.classList.remove('over');
        // console.log(box);
    })

    e.stopPropagation();
    return false;
}
// add event listener - add forEach Main Function and add all functions
    let items = document.querySelectorAll('.grab');

//--------- Function Main
    items.forEach((item)=> {
     //good
        item.addEventListener('mousedown',onDragStart);
        item.addEventListener('mouseup', onDrop);
        
//bad
        item.addEventListener('dragover',onDragOver);
        item.addEventListener('dragleave', dragleave);
        item.addEventListener('drop', onDrop);

    });