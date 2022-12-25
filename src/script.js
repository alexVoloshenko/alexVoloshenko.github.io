let script = document.querySelectorAll('.amp-script')
console.log(script)
const button  = document.querySelector('.button')
button.addEventListener('click', (e)=> {
    const text = document.querySelector('.text')
    text.style.display = 'unset'
    e.target.style.display = 'none'
})
