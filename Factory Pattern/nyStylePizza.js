const { Pizza } = require("./pizza");

class NYStypePizza extends Pizza{
    constructor(){
        super();
        this.name = "nyStylePizza";
    }

    cook(){
        console.log(this.name + " pizza is cooking");
    }


}

module.exports.NYStypePizza = NYStypePizza;