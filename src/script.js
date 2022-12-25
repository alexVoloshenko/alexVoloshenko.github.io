let script = document.querySelectorAll('.amp-script')
console.log(script)
const button  = document.querySelector('button')
button.addEventListener('click', (e)=> {
    e.target.style.color = 'red'
    console.log(e)
})
