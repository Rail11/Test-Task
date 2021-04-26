'use strict';

let activeBtns = document.querySelectorAll('input'),
    activePlanBlocks = document.querySelectorAll('.plans-block');

for (let i = 0; i < activeBtns.length; i++) {
    activeBtns[i].addEventListener('click', function() {
        for (let i = 0; i < activeBtns.length; i++) {
            activePlanBlocks[i].classList.remove('plans-block__active');
        }
        activePlanBlocks[i].classList.add('plans-block__active');
    });
}
