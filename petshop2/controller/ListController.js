import ListView from '../view/ListView.js';
import ListModel from '../model/ListModel.js';
import pets from '../helpers/mockData.js'

class ListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  showData() {

    const model = new ListModel(pets);
    const view = new ListView(pets);


    const cats = new ListView(model.getCats(), "Cats");
    cats.showPets();


    const fluffyOrWhite = new ListView(model.getFluffyOrWhite(), "Fluffy or white pets");
    fluffyOrWhite.showPets();


    const average = new ListView(model.getGreaterThanAveragePrice(), "Pets with greater than average price");
    average.showPets();

    view.setListeners();
  }
}

let render = new ListController();
render.showData();







