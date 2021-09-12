// 1.JSON => stringify, parse
const student = {
    name:'Kuddus',
    age:34,
    movies:['kodur bou', 'lau pata', 'light jole']
}
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2. fetch
// fetch('url')
//   .then(res => res.json())
//   .then(data => console.log(data))

// 3.keys, values

const keys = Object.keys(student);
const values = Object.values(student);

// forEach
const numbers = [34, 57, 64, 78, 63];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2)

// for of on array like object
// loop on an object using for in on object

// add or remove from an array
const products = [
    {name:'laptop', price:45000, brand:'dell', color:'black'},
    {name:'phone', price:25000, brand:'lg', color:'gold'},
    {name:'watch', price:4000, brand:'casio', color:'silver'},
    {name:'sunglass', price:400, brand:'ribon', color:'black'},
    {name:'camera', price:40000, brand:'canon', color:'blue'},
];

const newProduct = {name:'webcam', price:600, brand:'ajanta', color:'white'};

// copy products array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

// create new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone') 