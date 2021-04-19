console.log(process.argv)

var bottles = 99;

while (bottles >= 0){

  const bottleText = () => {
    if (bottles === 1){
      return "1 bottle"
    }
    else if (bottles > 0){
      return bottles + " bottles"
    }
    else return "No more bottles"
  }

  let verse = [
    "",
    `${bottleText()} of beer on the wall,`,
    `${bottleText()} of beer,`,
    `Take one down, pass it around,`,
    `${bottleText()} of beer on the wall,`,
  ].join("\n")

  // console.log(verse)
  bottles --;
}