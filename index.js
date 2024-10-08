// JavaScript 
for(let i = 0; i < document.querySelectorAll(`.drum`).length; i++) {
    
    
    document.querySelectorAll(`.drum`)[i].addEventListener(`click`, function(){
        // alert(`I got clicked`);
        debugger

        let buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// detecting keypress
document.addEventListener(`keypress`, function(event) {
    
    debugger;
    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key){
    
    switch (key) {
        case `w`:
            let tom1 = new Audio(`./sounds/tom-1.mp3`);
            tom1.play();                
            break;
        case `a`:
            let tom2 = new Audio(`./sounds/tom-2.mp3`);
            tom2.play();
            break;
        case `s`:
            let tom3 = new Audio(`./sounds/tom-3.mp3`);
            tom3.play();
            break;
        case `d`:
            let tom4 = new Audio(`./sounds/tom-4.mp3`);
            tom4.play();
            break;
        case `j`:
            let snare = new Audio(`./sounds/snare.mp3`);
            snare.play();
            break;
        case `k`:
            let crash = new Audio(`./sounds/crash.mp3`);
            crash.play();
            break;
        case `l`:
            let kick = new Audio(`./sounds/kick-bass.mp3`);
            kick.play();
            break;
    
        default:
            console.log(`another key was pressed`);
            break;
    }
}


// button animation 

function buttonAnimation(currentKey){

    let activeButton = document.querySelector(`.${currentKey}`);
    // activating the CSS style applied to the class
    activeButton.classList.add("pressed")


    // setting timeout to remove that CSS style applied to the class
    setTimeout(() => {
       activeButton.classList.remove("pressed"); 
    }, 100);

}
