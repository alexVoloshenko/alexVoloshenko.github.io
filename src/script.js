function getFetch(url) {
    let res = fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
    return res;
}
const containers = document.getElementsByClassName('offer-card__img-container--test')
containers.forEach(element => {
    element.addEventListener('scroll', function(){
        console.log("scroll")
    })
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