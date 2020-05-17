// navbar

const header = document.querySelector('header');

const liNav = document.querySelectorAll('.liNav');
const btnNav = document.querySelector('fa-bars');

header.addEventListener('click', function() {
    for (var i = 0; i < liNav.length; i++) {
        liNav[i].classList.toggle("show");
      }
})

  // filter blog

  const filterButtons = document.querySelector('#filter-btns').children;
  const items = document.querySelector('.containerCards').children;

    for (let i=0; i<filterButtons.length; i++) {
      filterButtons[i].addEventListener('click', function(){
        for(let j=0; j<filterButtons.length; j++) {
          filterButtons[j].classList.remove('active')
        }
        this.classList.add('active');
        const target=this.getAttribute('data-target');
        
        for(let k=0; k<items.length; k++){
          items[k].style.display='none';
          if(target==items[k].getAttribute('data-id'))
          {
              items[k].style.display='block';
          }
          if(target=="all"){
              items[k].style.display="block";
          }
        }
      })
    }