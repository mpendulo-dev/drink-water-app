const smallCups = document.querySelectorAll('.cup-small');
const litres = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remained  = document.getElementById('remained');

// function call
updateBigCup();


smallCups.forEach((cup, idx) => {

    cup.addEventListener('click', () => {
        // calling the highlight function
        highlightcups(idx);
});

});
function highlightcups(idx) {
    // If a user select a cup and tooglle the cup again it should remove the class of full
    if(smallCups[idx].classList.contains('full') && ! smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }
    smallCups.forEach((cup,idx2) => {
      
        // If both indexes are eqaul(idx, idx2) then add a class of full, else remove the class.
        if(idx2 <= idx) {
            cup.classList.add('full');
        }else {
            cup.classList.remove('full');
        }
    });
    updateBigCup();
}
function updateBigCup() {

    // constant varaible to store index of a cup.
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    
    // stores total number of cups
    const totalCups = smallCups.length;
  

    // if no cup has been selected, hide the text else set the percentage height in relation to total number of cups.
    // display percentage text on cup.
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;

    } else  {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups /totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100} %`;
    }

    // If cup is full don't display remained text, else display how many litres remain to meet targe goal.
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } 
    else {
        remained.style.visibility = 'visible';
        litres.innerText = `${2-(250 * fullCups / 1000)} L`;
    }
}