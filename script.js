const smallCups = document.querySelectorAll('.cup-small');
const litres = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remained  = document.getElementById('remained');


smallCups.forEach((cup, idx) => {

    cup.addEventListener('click', () => {
        highlightcups(idx);
});

});
function highlightcups(idx) {
    // If a user select a cup and tooglle the cup again it should remove the class of full
    if(smallCups[idx].classList.contains('full') && ! smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }
    smallCups.forEach((cup,idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full');
        }else {
            cup.classList.remove('full');
        }
    })
}