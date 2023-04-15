const { IngredientFactory } = require("./ingredientFactory");

class chicagoIngredientFactory extends IngredientFactory{
    constructor(){
        super();
        this.name = "Chicago";
    }
    oil(){
        console.log(this.name + " oil added");
    }
    redSause(){
        console.log(this.name + " red sause added");
    }

}

module.exports.chicagoIngredientFactory = chicagoIngredientFactory;