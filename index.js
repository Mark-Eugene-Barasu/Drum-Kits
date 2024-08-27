for(let i = 0; i < document.querySelectorAll(`.drum`).length; i++) {
    
    document.querySelectorAll(`.drum`)[i].addEventListener(`click`, function(){
        // alert(`I got clicked`);
        this.style.color = `white`


    });
}


// let audio = new Audio(`./sounds/tom-1.mp3`);
// audio.play();


// constructor function for house-keeper
function HouseKeeper(yearsOfExperience, name, cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}








