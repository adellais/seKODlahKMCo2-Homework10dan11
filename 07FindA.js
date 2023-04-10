console.log("Basic Challenge 07 : create a function that count number of a from given lopped word input:");

function countLetter(word, loop) {
    let repeatedWord = word.repeat(loop);
    let countA = 0;
    for (let i = 0; i < repeatedWord.length; i++) {
      if (repeatedWord[i] === "a") {
        countA++;
      }
    }
    return countA;
  }
  
  console.log(countLetter("aha", 3)); 