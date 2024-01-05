// Import
import {saveStorage} from './storageFile.js';

// all file scope 
let active = false;
let dragElement ;

// boxes 
const workBox = document.querySelector('.work');
const playBox = document.querySelector('.play');
const studyBox = document.querySelector('.study');
const exerciseBox = document.querySelector('.exercise');
const socialBox = document.querySelector('.social');
const selfCareBox = document.querySelector('.selfCare');

var boxArr = [workBox, playBox, studyBox, exerciseBox,socialBox,selfCareBox]

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
//Dotts UnActive
            dottsUnActive();
        }
    }

//<------------------- End Main -------------------->
/////////////////////////////////////////////////////
// <--------------- Supporting functions ------------------->
function onDragStart(e) {
    this.style.opacity = '0.4';
    console.log(this.id + ': area grid');

    dragElement = this;

    console.log(dragElement.id + ': drag elelment')

    e.dataTransfer.effectAllowed = 'move';
    // e.dataTransfer.setData('text/html',this.innerHTML)
    // e.dataTransfer.setData('id');
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
    e.stopPropagation();
    e.preventDefault();
    

    if(dragElement != this) {
    
        console.log('dragged Element: ' + dragElement.id);
        console.log('Element moved: ' + this.id);

        let valueDragedElement = window.getComputedStyle(dragElement).gridArea
        let valueElementMoved = window.getComputedStyle(this).gridArea

        console.log(window.getComputedStyle(this).gridArea)

        this.style.gridArea = valueDragedElement;
        dragElement.style.gridArea = valueElementMoved;

        this.id = dragElement.id
        dragElement.id = this.id
        

        console.log('Looking value: '+ valueDragedElement)
// Save changes if user refresh browser
        // saveStorage(dragElement.id, valueElementMoved);
        saveStorage(dragElement, this, valueDragedElement);
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

// console.log(boxArr)
export { boxArr };