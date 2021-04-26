'use strict';

let activeBtns = document.querySelectorAll('input'),
    activePlanBlocks = document.querySelectorAll('.plans-block');
    
/* activeBtns[1].addEventListener('click', function() {
    activePlanBlocks[1].classList.add('plans-block__active');
}); */

for (let i = 0; i < activeBtns.length; i++) {
    activeBtns[i].addEventListener('click', function() {
        for (let i = 0; i < activeBtns.length; i++) {
            activePlanBlocks[i].classList.remove('plans-block__active');
        }
        activePlanBlocks[i].classList.add('plans-block__active');
    });
}

activeBtns.forEach(e => {
    e.addEventListener('click', function() {
        
    });
});