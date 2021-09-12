// truthy => 'anything', 4, true, {}, [] 
// falsy => '', 0, false, null, undefined

// check truthy
let myVar = 5;
// check truthy
if(myVar){
    myVar = myVar * 45;
}
else{
    myVar = 0;
}

// falsy
let myMoney = 57;
// check negative or falsy anything
if(!myMoney){

}

const money = 700;
let food;
if(money > 100){
    food= 'biriyani';
}
else{
    food = 'tea-biscuit';
}

// ternary
let food1 = money > 100 ? 'biriyani' : 'tea-biscuit';
console.log(food1); 

let drink = (money > 100 && myVar > 100) ? 'coke' : 'water';
console.log(drink);

//number to string conversion
const num1 = 89;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// string to  number conversion
const input = '456';
const inputNum = +input;
console.log(inputNum);

// 
let isActive = false;
const showUser = () => console.log('display-user');
const hideUser = () => console.log('hide-user');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive

