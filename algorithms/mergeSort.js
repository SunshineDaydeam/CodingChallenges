const testArr = [1,4,7,2,3,8,6, 5]

function mergeSort(arr){
  let firstHalf = testArr.slice(0,arr.length/2)
  let secondHalf = testArr.slice(arr.length/2, arr.length)

  firstHalf.sort( (a, b) => a - b)
  secondHalf.sort( (a, b) => a - b)

  
  let newArray = [];

  let j = 0;
  let k = 0;
  
  for ( let i=0; i < arr.length; i++ ){

    let f = firstHalf[j]
    let s = secondHalf[k]

    if (f < s){
      newArray.push(f)
      j++
    }
    else{
      newArray.push(s)
      k++
    }

  }

  return newArray;

  
}

console.log(mergeSort(testArr));