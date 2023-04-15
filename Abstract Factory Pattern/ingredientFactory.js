class IngredientFactory{
    constructor(){
        if(this.constructor === IngredientFactory){
            return "throw error";
        }
    }

    oil(){
        throw "Error";
    }
    redSause(){

    }
}

module.exports.IngredientFactory = IngredientFactory;