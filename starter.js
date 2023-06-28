////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1,num2) => num1 + num2
const subtract = (num1,num2) => num1 - num2
const multiply = (num1,num2) => num1 * num2
const divide = (num1,num2) => num1 / num2
//we want to check if the arguments(num1 & num2) are number , if so then we wanna do the operation on them.
//In order to not repeat the code inside each function we will create a higher order function that accepts these function as callbacks


const calculator = (num1,num2,cb) => {
//we will check to see if these params(num1 & num2) can be coerced into numbers
//if it is, then we will go ahead and coere them
//if not , we will inform the user
if(+num1 && +num2){
  num1 = +num1
  num2 = +num2
  return cb(num1,num2)
} else {
  console.log(`please send in numbers`)
}
}

const addResult = calculator(1,2,add)
const subtractResult = calculator(3,1,subtract)
const multiplyResult = calculator(4,5,multiply)
const divideResult = calculator(10,2,divide)
// console.log(addResult)
// console.log(subtractResult)
// console.log(multiplyResult)
// console.log(divideResult)
///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
//we wanna apply discount by percentage(25% would be .25)
const applyPercentDiscount = (product,discount) => {
  product.displayPrice = product.basePrice * (1 - discount)
}
//we wanna be able to apply a flat rate discount($5)
const applyFlatRateDiscount = (product,discount) => {
  product.displayPrice = product.basePrice - discount
}

const applyDiscountsToCollection = (arr,discount,cb) => {
  for(let i = 0;i < arr.length;i++){
    cb(arr[i],discount)
  }
}

// applyDiscountsToCollection(dogProducts,.10,applyPercentDiscount)
// console.log(dogProducts)

// applyDiscountsToCollection(catProducts,5,applyFlatRateDiscount)
// console.log(catProducts)

const applyDiscountByCategory = (category,discount,arr,cb) => {
  //we want to iterate over the array and change the values that match the category
  for(let i = 0;i < arr.length;i++){
    //check if category matches, if it does we can do our operation and invoke the cb
    if(arr[i].category === category){
      cb(arr[i],discount)
    }
  }
}

// applyDiscountByCategory(1,.25,catProducts,applyPercentDiscount)
// console.log(catProducts)

// applyDiscountByCategory(2,2,dogProducts,applyFlatRateDiscount)
// console.log(dogProducts)


const applyDiscountByInventory = (inventory,discount,arr,cb) => {
  for(let i = 0;i <arr.length;i++){
    if(arr[i].inventory < inventory){
      cb(arr[i],discount)
    }
  }
}

applyDiscountByInventory(50,1,catProducts,applyFlatRateDiscount)
console.log(catProducts)

applyDiscountByInventory(80,.05,dogProducts,applyPercentDiscount)
console.log(dogProducts)
////////////////////////
////// SANDWICHES //////
////////////////////////
// CODE HERE
function makeSandwich(bread){
  //returns a function
  return function(ingredients){
    let order = `You ordered a ${bread} bread sandwich with `
    for(let i = 0;i < ingredients.length;i++){
      if(i === ingredients.length -1 && i !== 0){
        order += `and ${ingredients[i]}.`
      } else if (ingredients.length === 1){
        order += `${ingredients[i]}.`
      }else if(i === ingredients.length - 2){
        order += `${ingredients[i]} `
      }
      else {
        order += `${ingredients[i]},`
      }
    }
    return order
  }
}

const makeRyeSandwich = makeSandwich('rye')
//after the above implementation makeRyeSandwich becomes a function expression due to makeSnadwich returning a function.lloks something like below:
// const makeRyeSandwich = function(ingredients){
//   let order = `You ordered a ${bread} bread sandwich with `
//   for(let i = 0;i < ingredients.length;i++){
//     if(i === ingredients.length -1 && i !== 0){
//       order += `and ${ingredients[i]}.`
//     } else if (ingredients.length === 1){
//       order += `${ingredients[i]}.`
//     }else if(i === ingredients.length - 2){
//       order += `${ingredients[i]} `
//     }
//     else {
//       order += `${ingredients[i]},`
//     }
//   }
//   return order
// }
console.log(makeRyeSandwich(['pickles','cheese','turkey','mayo']))

