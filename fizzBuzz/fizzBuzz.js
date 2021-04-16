function fizzBuzz(){
  let arr = []

  for (let i = 1; i <= 100; i++ ){
    if (i%15 === 0) arr.push("fizz buzz");
    else if (i%5 === 0) arr.push("buzz");
    else if (i%3 === 0)arr.push("fizz");
    else arr.push(i)
  }
  return arr;
}

const result = fizzBuzz();

console.log(result)