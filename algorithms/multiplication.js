const tests = [
  { n1: 1234, n2: 5678, r: 7006652},
  { n1: 0, n2: 1, r: 0},
  { n1: 1, n2: 0, r: 0},
  { n1: 1, n2: 1, r: 1},
  { n1: 8, n2: 10, r: 80},
  { n1: 99, n2: 54, r: 5346},
  { n1: -1, n2: 54, r: -54},
  { n1: -99, n2: -54, r: 5346},
  { n1: -1, n2: -0, r: 0},

]

// Basic Multiplication
function basic(num1, num2){
  return num1 * num2;
}

// Long Multiplication Algorithm
function long(num1, num2){

  let isNeg = false;
  if (num1 < 0 && num2 < 0) isNeg = false;
  else if (num1 <0 || num1 <0) isNeg = true


  var a1 = Math.abs(num1).toString().split("").reverse();
  var a2 = Math.abs(num2).toString().split("").reverse();
  var aResult = new Array;

  for ( var iterNum1 = 0; iterNum1 < a1.length; iterNum1++ ) {
      for ( var iterNum2 = 0; iterNum2 < a2.length; iterNum2++ ) {
          var idxIter = iterNum1 + iterNum2;
          aResult[idxIter] = a1[iterNum1] * a2[iterNum2] + ( idxIter >= aResult.length ? 0 : aResult[idxIter] );

          if ( aResult[idxIter] > 9 ) {
              aResult[idxIter + 1] = Math.floor( aResult[idxIter] / 10 ) + ( idxIter + 1 >= aResult.length ? 0 : aResult[idxIter + 1] );
              aResult[idxIter] %= 10;
          }
      }
  }
  let negSymbol = isNeg? "-" : ""
  let r = negSymbol + aResult.reverse().join("")
  let result = parseFloat(r);
  return result;
}

// Karatsuba Multiplication Algorith
function karatsuba(num1, num2){
  // write function here
}

// Test Function
function runTest(algorithm, tests){
  let passes = 0
  let fails = 0
  let failures = []

  tests.forEach((element, i) => {
    let result = algorithm(element.n1, element.n2)
    if (result === element.r){
      passes++;
    }
    else {
      fails++
      failures.push({...element, o: result})
    }
  });

  const passDisplay = "\x1b[32m" + ((passes/tests.length) * 100).toFixed(2) + "% Tests Passing"
  const failDisplay = '\033[31m' + fails + ' failures \x1b[0m'
  const failArr = failures.map( f => {
    return `${f.n1}*${f.n1} returned ${f.o} but expected ${f.r}`
  })

  return console.log(`
    ${passDisplay}
    ${failDisplay}

    ${JSON.stringify(failArr)}
  `)

}

runTest(long, tests)

