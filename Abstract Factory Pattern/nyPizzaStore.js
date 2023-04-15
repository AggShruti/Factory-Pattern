const { CheezePizza } = require("./cheezePizza");
const { PizzaStore } = require("./pizzaStore");

class NYPizzaStore extends PizzaStore{
    constructor(ingredientFactoy){
        super();
        this.ingredientFactoy = ingredientFactoy;
    }

    createPizza(type){
        if(type === "cheeze"){
            return new CheezePizza(this.ingredientFactoy);
        }
    }

    orderPizza(type){
        let pizza = this.createPizza(type);
        pizza.prepare();
    }

}

module.exports.NYPizzaStore = NYPizzaStore;