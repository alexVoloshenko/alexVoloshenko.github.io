const sendData = document.getElementById("button");

let form = document.forms["pets"];
let result;

sendData.addEventListener("click", (event) => {
  event.preventDefault();
  let pet = {};
  let name;
  let value;
  for (let i = 0; i < form.elements.length; i++) {
    if(form.elements[i].name === "price"){
      value = parseInt(form.elements[i].value);
    }else{
      value = form.elements[i].value;
    }
     name = form.elements[i].name;

    if (form.elements[i].type === "checkbox") {
      pet[name] = form.elements[i].checked;
      continue;
    }
    pet[name] = value;
  }

  fetch('http://localhost:5000/addpets', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pet)
  }).then(function (response) {
    return response;
  }).then(function (response) {
    console.log(response);
  });
});

let showCatsButton = document.querySelector(".show-cats");
showCatsButton.addEventListener("click", (event) => {
  fetch('http://localhost:5000/pets/cats').then(function (response) {
    return response.json();
  }).then(function (res) {
    console.log(res);
  });
});

let showPetsAverage = document.querySelector(".show-pets-average");
showPetsAverage.addEventListener("click", (event) => {
  fetch('http://localhost:5000/pets/average').then(function (response) {
    return response.json();
  }).then(function (res) {
    console.log(res);

  });
});

let showFluffyOrWhite = document.querySelector(".show-fluffy-or-white");
showFluffyOrWhite.addEventListener("click", (event) => {
  fetch('http://localhost:5000/pets/fluffyorwhite').then(function (response) {
    return response.json();
  }).then(function (res) {
    console.log(res);
  });
});



