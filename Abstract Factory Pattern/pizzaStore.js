class PizzaStore{
    constructor(){
        if(this.constructor === PizzaStore){
            throw "Error can't instantiate "
        }
    }

    createPizza(type){
        throw "Error";
    }

    orderPizza(){

    }

}

module.exports.PizzaStore = PizzaStore;
