// for(let i = 0; i < document.querySelectorAll(`.drum`).length; i++) {
    
//     document.querySelectorAll(`.drum`)[i].addEventListener(`click`, function(){
//         alert(`I got clicked`);
//     });

// }


// a much modern way to loop through a list
document.querySelectorAll(`.drum`).forEach(drum => {
    drum.addEventListener(`click`, () => {
        alert(`I got clicked`);
    });
});

