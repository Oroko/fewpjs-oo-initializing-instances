// Write your code here

class Breakfast {
  constructor(food,drink){
    this.food = food
    this.drink = drink
  }
}

let breko = new Breakfast('toast','coffee')

class Lunch{
  constructor(salad, soup, drink){
    this.salad = salad
    this.soup = soup
    this.drink = drink
  }
}

let lunch = new Lunch('Corn salad', 'tomato','water')

class Dinner {
  constructor(salad, soup, entree, dessert){
    this.salad = salad 
    this.soup = soup
    this.entree = entree 
    this._dessert = dessert
  }
}
let dinner = new Dinner("kale salad", "pea soup", "wings", "cheesecake");
