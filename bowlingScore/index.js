const {testCases} = require ('./testCases');

// yarn run bowling

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

    roll = parseInt(roll,10)

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
      else throwRegular(roll, i)

    }

    // 2nd Throw
    else if (rounds[currentRound].roll12 === null){

      // If Spare
      if (roll + rounds[currentRound.roll1] === 10) throwSpare(roll, i)

      // Regular Throw (Non Spare)
      else {
        throwRegular(roll, i)

      }
    }
  })

  

  const totalScore = rounds.map( r => r.total).reduce((pv, cv) => pv + cv, 0);
  if (error) return "Error";
  else return totalScore;
}

// Function Test
function testFunction(){
  let totalCount = testCases.length;
  let passes = 0;
  let fails = 0;
  let ratio = ""

  testCases.forEach( tc => {
    let result = calculateScore(tc.rolls)
    if (result === tc.expectedResult){
      passes ++;
    }
    else {
      fails ++;
    }
  })
  console.log(`
Test Complete
${(passes / totalCount) * 100 + "%"} success rate based on ${totalCount} tests
`)
}

testFunction()

