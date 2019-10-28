class Food{
    constructor(foodName, callories){
        this._foodName = foodName;
        this._callories = callories;
    }
    getFoodName(){
        return this._foodName;
    }
    getCallories(){
        return this._callories;
    }
    getTableRow(){

    }
}
foods = [];
foods.push(new Food("Popcorn", 5));
foods.push(new Food("Ice Cream", 50));
foods.push(new Food("Steak", 45));
foods.push(new Food("Corndog", 15));
totalCalories = 0;

for (food of foods){
    console.log(food.getFoodName());
    totalCalories += food.getCallories();
    tableElm.append(food.getTableRow());
}
console.log("Callories: " + totalCalories);
