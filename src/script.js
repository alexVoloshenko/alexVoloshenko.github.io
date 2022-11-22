async function getFetch(url) {
    let res = await fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        });
    return res;
}
console.log(getFetch('https://site.bookimed.com/widget/before-after-operation/clinic/1169?lang=en'))