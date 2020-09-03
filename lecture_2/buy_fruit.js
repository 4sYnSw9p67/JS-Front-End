function buyFruit(fruit, weight, price_kg) {
    let weight_kg = (weight / 1000);
    let price = (price_kg * weight_kg);

    console.log(`I need $${price.toFixed(2)} to buy ${weight_kg.toFixed(2)} kilograms ${fruit}.`);
}
buyFruit("apple", 1563, 2.35);