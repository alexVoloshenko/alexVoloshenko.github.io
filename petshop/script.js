class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  getPet(){
    return [this.name,this.color]
  }

  get petName() {
    return $this.name;
  }

  get petColor() {
    return $this.color;
  }

}
let dog = new Pet('test');
console.log(dog.getPet());