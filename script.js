function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
        pizza.crustType = crustType;
        pizza.sauceType = sauceType;
        pizza.cheeses = cheeses;
        pizza.toppings = toppings;
        console.log(pizza);
        return pizza;
}

pizzaOven("deep dish","traditional","mozzarella",["pepperoni","sausage"]);

pizzaOven("hand tossed","marinara",["mozzarella", "feta"],["mushrooms", "olives", "onions"]);

pizzaOven("stuffed","marinara",["mozzarella","cheddar"],["pepperoni","sausage","canadian bacon"]);

pizzaOven("pan","traditional","mexican blend",["pepperoni","sausage","black olives","bacon"]);