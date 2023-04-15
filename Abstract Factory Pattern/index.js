const { chicagoIngredientFactory } = require("./chicagoIngredientFactory");
const { ChicagoPizzaStore } = require("./chicagoPizzaStore");
const { NYPizzaStore } = require("./NYPizzaStore");
const {nyIngredientFactory} = require("./nyIngredientFactory.js");


let chicagoIngredients = new chicagoIngredientFactory();
let nyIngredients = new nyIngredientFactory();
let pizza = new NYPizzaStore(chicagoIngredients);

pizza.orderPizza("cheeze");

pizza = new ChicagoPizzaStore(nyIngredients);

pizza.orderPizza("cheeze");