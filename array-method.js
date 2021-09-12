const products = [
    {name:'laptop', price:45000, brand:'dell', color:'black'},
    {name:'phone', price:25000, brand:'lg', color:'gold'},
    {name:'watch', price:4000, brand:'casio', color:'silver'},
    {name:'sunglass', price:400, brand:'ribon', color:'black'},
    {name:'camera', price:40000, brand:'canon', color:'blue'},
];
// 1.map
const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

// 2.forEach
// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))

products.forEach(product => {

})

// 3.filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

// 4.find
const special = products.find(product => product.name.includes('n'));
console.log(special);