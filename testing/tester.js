// Test Function
function runTest(method, tests){
  let passes = 0
  let fails = 0
  let failures = []

  tests.forEach((element, i) => {
    let result = algorithm(element.n1, element.n2)
    if (result === element.r){
      passes++;
    }
    else {
      fails++;
      failures.push({...element, o: result});
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