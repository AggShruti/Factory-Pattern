const { NYStypePizza } = require("./nyStylePizza");
const { PizzaStore } = require("./pizzaStore");

class NYPizzaStore extends PizzaStore{
    constructor(){
        super();
    }

    createPizza(type){
        if(type === "cheeze"){
            return new NYStypePizza();
        }
    }

    orderPizza(type){
        let pizza = this.createPizza(type);
        pizza.cook();
    }

}

module.exports.NYPizzaStore = NYPizzaStore;