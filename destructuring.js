// 1.Array destructuring
const numbers = [ 34, 76];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [34, 76];
 const [x, y] = numbers;

 function getValues(num1, num2){
     const nums = [num1, num2];
     return nums;
 }

//  const [first, second] = [45, 67];
 const [first, second] = getValues(45, 67);

// console.log(getValues(45, 67));
const student = {
    name:'Kuddus',
    age:34,
    movies:['kodur bou', 'lau pata', 'light jole']
}

const [firstMovie, secondMovie] = student.movies;

// object destructuring
const {name, age} = {name:'potol', age:28};
const {name, age} = {id: 13, name:'potol', salary:45000, age:28};

const employee = {
    ide:'VS Code',
    designation:'developer',
    machine:'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight:65,
        address:'fakirapool',
        drink:'shada pani',
        watch:{
            color:'black',
            price:4000,
            brand:'hewit'
        }
    }
}

const {machine, ide} = employee;
const {weight, address} = employee.specification;
const {brand} = employee?.specification?.watch;