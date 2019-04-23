export default function menuAnimation(){
  let nav = document.querySelector('.home-nav-items');
  let items = document.querySelectorAll('.home-nav-item');
  let containers = document.querySelectorAll('.container');


  nav.addEventListener('click', function (event) {
    let target = event.target;

    for (let i = 0; i < items.length; i++) {
      if (items[i].classList.contains('active')) {
        items[i].classList.remove('active');
      }
      if (i < containers.length && containers[i].classList.contains('visible')) {
        containers[i].classList.remove('visible');
      }
    }

    while (target !== nav) {
      if (target.tagName === 'LI') {
        target.classList.add('active');
        containers[target.dataset.indexNumber].classList.add('visible');
        return;
      }
      target = target.parentNode;
    }
  });


}