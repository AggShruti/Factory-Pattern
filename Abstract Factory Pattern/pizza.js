class Pizza{
    constructor(){
        if(this.constructor === Pizza){
            throw "Abstract class can't be instantiated";
        }
        // this.ingredientFactory = new ingredientFactory();
    }

    prepare(){
        throw "error";
    }

    bake(){
        console.log("Bake");
    }

    cut(){
        console.log();
    }
    // cook(){
    //     console.log("Pizza Cooking");
    // }

}


module.exports.Pizza = Pizza;