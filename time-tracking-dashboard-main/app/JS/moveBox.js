// global
let active = false;
let dragElement ;
console.log(dragElement);

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

// <--------- Grab Elements -------------------------------->
    let items = document.querySelectorAll('.grab')
    items.forEach((item)=> item.addEventListener('click', pressDotts))

// <--------------- Main Function ----------------->
    function pressDotts(e) {

        if(active != true) {
            boxArr.forEach((box)=>{
                box.setAttribute('draggable', true);

//<--- Boxes ------ Boxes ------ Boxes ------ Boxes --->
            box.addEventListener('dragstart', onDragStart);
            box.addEventListener('dragend', dragEnd)
            box.addEventListener('dragenter', dragEnter );
            box.addEventListener('dragleave', dragleave);
            box.addEventListener('dragover', onDragOver); //check
            box.addEventListener('drop', onDrop); //NOK
//<------ End ------ End ------ End ------ End --->
        })
        
        items.forEach((item)=>{
            item.innerHTML = 'unlocked';
            item.classList.add('pressDotts');
        });
        active = true;
        // console.log('after press: ' + active)
    }else {
        boxArr.forEach((item)=>{item.setAttribute('draggable', false);})
        // Plus info ?
        items.forEach((item)=>{
            item.innerHTML = '...';
            item.classList.remove('pressDotts');
            active = false;
        });
    }
}


// <--------------- Supporting functions ------------------->
function onDragStart(e) {
    this.style.opacity = '0.4';

    dragElement = this;
    
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html',this.innerHTML)

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
    console.log(this.innerHTML)
    e.stopPropagation();

    if(dragElement != this) {
        dragElement.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html')
    }

    return false;
}