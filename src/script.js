async function getFetch(element) {
    const response = await fetch('https://site.bookimed.com/widget/before-after-operation/clinic/1169?lang=en')
    let result = await response.json();
    if (result.length) {
        result = result.slice(0, 3)
        const link = element.target.querySelector('.offer-card__img-swipe')
        result.forEach(item => {
            element.target.querySelector('.offer-card__img-swipe').style.display = 'flex'
            let img = document.createElement('amp-img')
            img.setAttribute('src', item.image_url)
            img.setAttribute('layout', 'intrinsic')
            img.setAttribute('width', '400')
            img.setAttribute('height', '175')
            img.setAttribute('alt', 'before-after')
            img.classList.add('before-after')
            element.target.insertBefore(img, link)
        })
    }
    // let res = fetch('https://site.bookimed.com/widget/before-after-operation/clinic/1169?lang=en')
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     });
    // return res;
}
function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
function getPhotos (element) {
    getFetch(element)
    console.log(element)
    element.target.removeEventListener('scroll', getPhotos)
}
const containers = document.getElementsByClassName('offer-card__img-container--test')
containers.forEach(element => {
    element.addEventListener('scroll', getPhotos)
});
// containers.addEventListener('scroll', function(){
//     console.log("here")
// })
const imgs = document.getElementsByClassName('offer-card__amp-img')
imgs.forEach(element => {
    element.addEventListener('click', function(){
        console.log("click")
    })
});

//getFetch('https://site.bookimed.com/widget/before-after-operation/clinic/1169?lang=en')