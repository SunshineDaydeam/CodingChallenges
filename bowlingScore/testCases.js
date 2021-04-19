module.exports = {

  testCases : [
    { rolls: [10,10,10,10,10,10,10,10,10,10,10,10], expectedResult: 300},
    { rolls: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,], expectedResult: 0},
    { rolls: [0,0,0,0,0,0,0,0,0,10,10,9,0,0,0,0,0,0,0,0,0,0,], expectedResult: 29},
    { rolls: [0,4,3,2,6,4,3,2,9,1,10,10,9,0,7,2,10,5,4], expectedResult: 132},
    { rolls: [0,2,4,6,3,7,9,0,10,0,3], expectedResult: 44},
    { rolls: [0,2,5], expectedResult: 7},
    { rolls: [0,-2,-4,-6,-3,-7,-9,-0,-10,0,-3], expectedResult: "Error"},
    { rolls: [1,10,10,10,12,10,10,10,10,10,10,10], expectedResult: "Error"},
    { rolls: ["10","10","10","10","10","10","10","10","10","10","10","10"], expectedResult: 300},
  ]

}

