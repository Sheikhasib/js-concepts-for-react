// 1.How to declare a variable using let and const
const myName = 'Rozen';
let season = 'summer';
season = 'winter';

// 2. 6 basic conditions: >, <, ===, !==, <=, >=
// multiple conditions: &&, ||

if(myName === season){

}
else if(myName === 'Hasib'){

}
else{

}

// 3.Array
// index
// length, push
const numbers = [23, 4,3, 6745];
numbers[0] = 45;

// 4.for Loop
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// 5.Function
function multiply(num1, num2){
    const result =num1 * num2;
    return result;
}
const output = multiply(23, 56);

// 6.object
// 3 ways to access property by name
const student = {
    name:'Kuddus',
    age:34,
    movies:['kodur bou', 'lau pata', 'light jole']
}

const myVariable = 'age';

console.log(student.age); //direct accessing by property
console.log(student['age']); //access via property name string
console.log(student[myVariable]); //access via property name in a variable