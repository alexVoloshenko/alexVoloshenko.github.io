export default class {
  constructor(pets) {
    this.pets = pets;
  }

  getPets() {
    return this.pets;
  }

  getFluffyOrWhite() {
    return this.pets.filter(item => (item.isFluffy || item.color === "white"));
  }

  getCats() {
    return this.pets.filter(item => (item.type === "cat"));
  }

  getGreaterThanAveragePrice() {
    let averagePrice = this.pets.reduce((accumulator, currentValue) =>
    accumulator + currentValue.price,0) / this.pets.length;

    return this.pets.filter(item => item.price > averagePrice);
  }
}