console.log("here amp script");
const button = document.querySelector(".cookie-button__btn");
button.addEventListener("click", (e) => {
	window.location.href = window.location.href.replace("/m", "");
});
