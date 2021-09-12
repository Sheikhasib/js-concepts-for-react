const numbers = [23, 4,3, 6745];
const student = {
    name:'Kuddus',
    age:34,
    movies:['kodur bou', 'lau pata', 'light jole']
}

// 1.template string
const about = `His name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movie ${student.movies[0]}`;
console.log(about);

// 2.Arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// 3.spread operator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumber =[...numbers, 55];
numbers.push(88);
console.log(numbers);
console.log(newNumbers);
console.log(currentNumber);