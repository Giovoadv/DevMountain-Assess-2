// Write an arrow function that returns 2.
const giveMeTwo = () =>{
  return 2;
} // Replace `undefined` with your code

// Write an arrow function that takes in a movie and returns '<movie> is the best movie
// ever!' where <movie> is the argument passed into the function.
const bestMovie = (movie) => {
  return `${movie} is the best movie ever!`
} // Replace `undefined` with your code

// Write an arrow function called 'compareNums' that takes in 2 parameters,
// which will be numbers.
// The function should return the bigger number.
// If the numbers are the same, just return the number.
const compareNums = (num1, num2) =>{
  
  if( num1 > num2){
    return  num1
  }else if(num2 > num1){
    return num2
  }else{
    return num1;

  }
} // Replace `undefined` with your code
//
//console.log(compareNums(2,4))

const foods = [
  {
    name: 'bread',
    carbs: 36,
    protein: 8,
    fat: 2,
  },
  {
    name: 'mayo mustard mix',
    carbs: 0,
    protein: 0,
    fat: 10,
  },
  {
    name: 'turkey',
    carbs: 0,
    protein: 25,
    fat: 1,
  },
  {
    name: 'cheese',
    carbs: 0,
    protein: 5,
    fat: 7,
  },
];

// Use the .forEach method to modify each food object in the foods array above to include calories.
// Calories can be calculated by multiplying carbs by 4, protein by 4, fat by 9,
// and then adding the results together.
function addCalories() {

  /*foods.forEach(food)
  foods.calories = food.carbs*4 + food.protein*4 + food.fat*7;*/

  foods.forEach(food => {
    food.calories = (food.carbs * 4) + (food.protein * 4) + (food.fat * 9);
  });

  // Replace this with your code
  return foods;
}

// For problems 2-4, you will be working with the products array below.
// Think of this array as a store's inventory.
const products = [
  {
    name: 'backpack',
    color: ['red', 'yellow'],
    price: 500,
  },
  {
    name: 'shirt',
    color: ['blue'],
    price: 400,
  },
  {
    name: 'shoes',
    color: ['red'],
    price: 1200,
  },
  {
    name: 'socks',
    color: ['yellow', 'blue'],
    price: 200,
  },
  {
    name: 'pants',
    color: ['blue', 'red'],
    price: 1000,
  },
];

// You've decided to have a sale on everything you have in stock. It's all going to be 25% off.
// Using the map method, make a copy of your products array with the prices reduced by 25%
// and return it.
function getSaleProducts() {
  let mapFunction = (elemento) =>{
    let elementoCopy = Object.assign({}, elemento);
    let discount = elementoCopy.price - (elementoCopy.price * 0.25);
    elementoCopy.price = discount;
    return elementoCopy;
  }

  let products25Off = products.map(mapFunction)
  return products25Off;


  // Replace this with your code
}
//console.log(getSaleProducts())
// A customer has placed an order - they want one of every product that has blue on it.
// Using the filter method return the products that have blue in their color array
// to a new variable called 'blueProducts' and return it.
// (Hint: look up the array method 'includes' on MDN)
function getBlueProducts() {
  
  let filterFunction = (elemento) =>{
    return elemento.color.includes("blue");
  }
  
  
  
  let blueProducts = products.filter(filterFunction);
  
  return blueProducts;

  // Replace this with your code
}
//console.log(getBlueProducts());

// Get the total price of all the products using the reduce method.
function getTotalPrice() {
  const initialValue = 0;
  const totalPrice = products.reduce((acc, food) => acc + food.price, initialValue);
  return totalPrice;
                    



  
//const totalPrice = foods.reduce((sum, food) => sum + food.price, 0);
  // Replace this with your code
}
console.log(getTotalPrice())

export {
  addCalories,
  bestMovie,
  compareNums,
  foods,
  getBlueProducts,
  getSaleProducts,
  getTotalPrice,
  giveMeTwo,
  products,
};
