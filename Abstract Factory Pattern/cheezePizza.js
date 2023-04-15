const { Pizza } = require("./pizza");

class CheezePizza extends Pizza{
    constructor(ingredientFactory){
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare(){
        this.ingredientFactory.oil();
        this.ingredientFactory.redSause();
    }

    


}

module.exports.CheezePizza = CheezePizza;