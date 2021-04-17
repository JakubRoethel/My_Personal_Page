const txtTyping = ['I am Jakub Roethel', ' I am Frontend Developer']
const spnText = document.querySelector('.my-info-title')
const spnCursor = document.querySelector('.cursor')

let activeLetter = -10;
let activeText = 0;

const addLetter = () => {
    if(activeLetter >= 0) {
        spnText.textContent += txtTyping[activeText][activeLetter];
    }
    activeLetter++
    if (activeLetter === txtTyping[activeText].length) {
        activeText ++
        if(activeText === txtTyping) return;
        return setTimeout(()=>{
            activeLetter = 0
            addLetter()
        },2000)
    }

    setTimeout(addLetter,200)
}

addLetter();

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
   }
   setInterval(cursorAnimation, 400);
