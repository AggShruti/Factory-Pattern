const { IngredientFactory } = require("./ingredientFactory");

class nyIngredientFactory extends IngredientFactory{
    constructor(){
        super();
        this.name = "new york"
    }
    oil(){
        console.log(this.name + " oil added");
    }
    redSause(){
        console.log(this.name + " red sause added");
    }

}

module.exports.nyIngredientFactory = nyIngredientFactory;