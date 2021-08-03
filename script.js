// selecting elements
const tabs = document.querySelectorAll('[data-tab-target');
const tabContents = document.querySelectorAll('.content');
const plusSigns = document.querySelectorAll('.plus');



tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();

    // add bg-color & color functionality upon tab change
    tabs.forEach(tab => {
      tab.classList.remove('active');
    })
    tab.classList.add('active');

    // add functionality to tabs
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    }); 
    target.classList.add('active');
  }); 
}); 

// accordion

const containerUl = document.querySelector('.tab-collector');
containerUl.addEventListener('click', expandAccordion);

function expandAccordion(e) {
  if(e.target.classList.contains('plus')) {
    console.log(e.target);
  }
}

