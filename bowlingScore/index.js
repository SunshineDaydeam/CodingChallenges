const {testCases} = require ('./testCases');

// Score Calculator
function calculateScore(rolls){

  const rounds = [
    { round: 0, roll1: null, roll2: null, extra1: null, extra2: null, total: 0},
    { round: 1, roll1: null, roll2: null, extra1: null, extra2: null, total: 0},
    { round: 2, roll1: null, roll2: null, extra1: null, extra2: null, total: 0},
    { round: 3, roll1: null, roll2: null, extra1: null, extra2: null, total: 0},
    { round: 4, roll1: null, roll2: null, extra1: null, extra2: null, total: 0},
    { round: 5, roll1: null, roll2: null, extra1: null, extra2: null, total: 0},
    { round: 6, roll1: null, roll2: null, extra1: null, extra2: null, total: 0},
    { round: 7, roll1: null, roll2: null, extra1: null, extra2: null, total: 0},
    { round: 8, roll1: null, roll2: null, extra1: null, extra2: null, total: 0},
    { round: 9, roll1: null, roll2: null, extra1: null, extra2: null, total: 0},
  ]
  let currentRound = 0;
  let error = false

  function throwStrike(roll, i){
    rounds[currentRound].roll1 = roll
    rounds[currentRound].roll2 = null
    rounds[currentRound].extra1 = parseInt(rolls[i + 1],10) || 0
    rounds[currentRound].extra2 = parseInt(rolls[i + 2], 10) || 0
    rounds[currentRound].total = rounds[currentRound].roll1 + rounds[currentRound].extra1 + rounds[currentRound].extra2
    currentRound ++;
  }
  function throwRegular(roll, i, count){
    // console.log(count)
    if (count === 1){
      rounds[currentRound].roll1 = roll
      rounds[currentRound].totalScore = roll
    }
    else{
      rounds[currentRound].roll2 = roll
      rounds[currentRound].total += roll
      currentRound ++;
    }
    
  }
  function throwSpare(roll, i){
    rounds[currentRound].roll2 = roll
    rounds[currentRound].extra1 = parseInt(rolls[i + 1],10) || 0
  }
  
  rolls.forEach( (roll, i) => {
    const roundCumScore = rounds.map( r => r.total).reduce((pv, cv) => pv + cv, 0);
    // console.log("roll #", currentRound, "of ", roll, roundCumScore)

    roll = parseInt(roll,10)

    // console.log(rounds[currentRound].roll1)

    // After 10 rounds Stop
    if (currentRound === 10){
      return;
    }

    if (roll > 10 || roll < 0){
      return error = true;
    }

    // First Throw
    else if (rounds[currentRound].roll1 === null){
      

      // If Strike
      if (roll === 10) throwStrike(roll, i)
      
      // Regular Throw (Non Strike)
      else throwRegular(roll, i, 1)

    }

    // 2nd Throw
    else if (rounds[currentRound].roll12 === null){

      // If Spare
      if (roll + rounds[currentRound.roll1] === 10) throwSpare(roll, i)

      // Regular Throw (Non Spare)
      else {
        throwRegular(roll, i, 2)
      }
    }
  })

  

  const totalScore = rounds.map( r => r.total).reduce((pv, cv) => pv + cv, 0);
  if (error) return "Error";
  else return totalScore;
}

function calculateScore2(rolls, expected){
  let runningScore = 0;
  let round = 1;
  let rc = 1;
  let rounds = []


  for (let i = 0; i < rolls.length; i++){
    let roll = rolls[i]

    // First Roll Of a Round
    if (rc == 1){
      let scores = { r1: null, r2: null, e1: null, e2: null, strike: false, spare: false, totalScore: null,}
      
      // If Strike
      if (roll == 10){ 
        scores.r1 = 10; 
        rc = 1; 
        scores.strike = true;
        round++;
      }
      // Not Strike
      else { scores.r1 = roll; rc = 2 }
      rounds.push(scores)
    }
    
    // Second Roll of Round
    else {
      let currRound = rounds[rounds.length - 1]
      // console.log(rounds[rounds.length -1])

      rounds[rounds.length-1].r2 = roll

      // // If Spare
      // if (currRound.r1 + roll === 10){

      // }

      // // Not Spare
      // else (currRound.r1 + roll === 10){
       
      // }
      round ++;

    }
  }

  console.log(rounds)
  console.log(`
    Current Round : ${round}
    Total Score : ${rounds.map( r => r.totalScore).reduce( (a, b) => a+b)}
  `)

}

// Test Method
function runTest(method, tests){
  let passes = 0
  let fails = 0
  let failures = [];

  tests.forEach((element, i) => {
    let result = method(element.rolls)
    if (result === element.expectedResult){
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
    return `${JSON.stringify(f.rolls)} returned ${f.o} but expected ${f.expectedResult}`
  })

  return console.log(`
    ${passDisplay}
    ${failDisplay}

    ${JSON.stringify(failArr)}
  `)

}

// runTest(calculateScore2, testCases)
calculateScore2([10,2,3], 15)

