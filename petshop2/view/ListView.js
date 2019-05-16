


export default class ListView  {
  constructor(pets, containerName) {
    this.containerName = containerName;
    this.pets = pets;
  }

  showPets() {

    let petShopContainer = document.querySelector(".pet-shop");
    let container = document.createElement("div");
    let title = document.createElement("h2");
    title.textContent = `${this.containerName}`;
    container.appendChild(title);

    this.pets.forEach((item, i, arr) => {
      let div = document.createElement("div");
      div.className = "pet";
      div.id = `${item.id}`;
      div.innerHTML = (`      
        <div class="pet__name">${item.name}</div>
        <div class="pet__type">${item.type}</div>
        <div class="pet__price">${item.price}</div>
        <div class="pet__color">${item.color}</div>
        <div class="pet__isFluffy">${item.isFluffy ? 'fluffy' : 'not fluffy'}</div>
        <a href="" class="button">Buy</a>
        `
      );
      container.appendChild(div);
    });
    petShopContainer.appendChild(container);
  }

  setListeners() {
    let buttons = document.querySelectorAll(".button");
    let cart  = document.querySelector(".cart");
    for (let item of buttons) {
      item.addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById(event.target.parentNode.id).remove();
        cart.appendChild(event.target.parentNode);
      });
    }
  }
}