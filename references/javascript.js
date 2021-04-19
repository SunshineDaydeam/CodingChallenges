// Basic Javscript Functions  //
//                            //
//                            //
//                            //

let arr = [
  { name: "sarah", age: 32, likes: ["fashion", "architecture", "traveling"]},
  { name: "jon", age: 47, likes: ["fishing", "guns", "camping"]},
  { name: "bill", age: 61, likes: ["television", "makeup", "swimming"]},
  { name: "rachel", age: 23, likes: ["art", "cooking", "camping"]},
  { name: "alex", age: 33, likes: ["traveling", "computers", "vanlife"]},
]
let arr2 = [ 3,5,8,0,2,1,5,67,32]

// For Loop
for (let i = 0; i < 100; i++){
  return i;
}

// Map
const mappedArray = arr.map( (item, i) => {
  return item + " " + i
})

// Reduce Array of Numbers
const totalSumOfArray = arr2.reduce( (a,b) => {
  return a + b;
})
console.log(totalSumOfArray) // 123

// Reduce Array of Objects
const totalAges = arr.reduce( function(a,b){ 
  return { age: a.age + b.age};
})    
console.log(totalAges) // { age: 196}
console.log(totalAges.age) // 196

// Filter
const filteredArray = arr.filter( (a,b) => {
  return a.age > 30
})
console.log(filteredArray.length) // 4

// Sort Alpahbetically
const sortedArray = arr.sort( (a,b) => {
  if (a.name < b.name) return -1;
  if (b.name < a.name) return 1;
  return 0
})

// Sort Simple
const sortedSimpleArray = arr2.sort( (a,b) => {return a < b}, -1)
console.log(sortedSimpleArray)
