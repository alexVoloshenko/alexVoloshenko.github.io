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
getFetch('https://site.bookimed.com/widget/before-after-operation/clinic/1169?lang=en')