// global
let active = false;
let dragElement ;

// TASK
// check transferData to move only grid-area CSS

// boxes 
const workBox = document.querySelector('.work');
const playBox = document.querySelector('.play');
const studyBox = document.querySelector('.study');
const exerciseBox = document.querySelector('.exercise');
const socialBox = document.querySelector('.social');
const selfCareBox = document.querySelector('.selfCare');

const boxArr = [workBox, playBox, studyBox, exerciseBox,socialBox,selfCareBox]

// boxes to grid
const work = workBox.style.gridArea
const play = playBox.style.gridArea
const study = studyBox.style.gridArea
const exercise = exerciseBox.style.gridArea
const social = socialBox.style.gridArea
const selfCare = selfCareBox.style.gridArea

const boxGridArr = [work, play, study, exercise, social, selfCare]

// <--------- Grab Elements -------------------------------->
    let items = document.querySelectorAll('.grab')
    items.forEach((item)=> item.addEventListener('click', pressDotts))

// <--------------- Main Function ----------------->
    function pressDotts(e) {

        if(active != true) {
            boxActive();
//Dotts Active
            dottsActive();
            active = true;
// console.log('after press: ' + active)
        }else {
            boxUnActive();
//Dotts UnActive ?
            dottsUnActive();
        }
    }

// <--------------- Supporting functions ------------------->
function onDragStart(e) {
    this.style.opacity = '0.4';
    console.log(this.style.gridArea)
    dragElement = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html',this.innerHTML)
    // e.dataTransfer.setData('text/html',this.style.gridArea);
}

function dragEnd(e) {
    this.style.opacity = '1';

    boxArr.forEach((box)=>{
        box.classList.remove('over')
    })
}

function dragEnter(e) {
    this.classList.add('over');
}

function dragleave(e) {

    this.classList.remove('over');
    this.style.opacity = '1';
}

function onDragOver(e) {
    
    this.style.opacity = '0.4';
    this.classList.add('over');
    e.preventDefault();
    return false;
}

function onDrop(e) {
    boxArr.forEach((box)=> {
        box.style.opacity= '1';
        box.classList.remove('over');
    })
    // console.log(this.innerHTML)
    e.stopPropagation();

    if(dragElement != this) {
        dragElement.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html')

        // this.target.appendChild(getData)
    }
    return false;
}

function dottsActive() {

    items.forEach((item)=>{
            item.innerHTML = 'unlocked';
            item.classList.add('pressDotts');
        });
}

function dottsUnActive() {

    items.forEach((item)=>{
            item.innerHTML = '...';
            item.classList.remove('pressDotts');
            active = false;
        });
}

function boxActive() {
    boxArr.forEach((box)=>{
                box.setAttribute('draggable', true);
//<--- Boxes ------ Boxes ------ Boxes ------ Boxes --->
            box.addEventListener('dragstart', onDragStart);
            box.addEventListener('dragend', dragEnd)
            box.addEventListener('dragenter', dragEnter );
            box.addEventListener('dragleave', dragleave);
            box.addEventListener('dragover', onDragOver);
            box.addEventListener('drop', onDrop);
//<------ End ------ End ------ End ------ End --->
        })
}

function boxUnActive() {
    boxArr.forEach((item)=>{
        item.setAttribute('draggable', false);
    });
}