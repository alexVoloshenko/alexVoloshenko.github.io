async function getFetch(element) {
    const response = await fetch('https://site.bookimed.com/widget/before-after-operation/clinic/1169?lang=en')
    const result = await response.json();
    if (result.length) {
        result = result.slice(0, 3)
        result.forEach(item => {
            let img = document.createElement('img')
            img.src = item.image_url
            element.appendChild(img)
        })
    }
    // let res = fetch('https://site.bookimed.com/widget/before-after-operation/clinic/1169?lang=en')
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     });
    return res;
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