function findLongestWordLength(str) {
  let arr = str.split(' ');
  let longestWord = arr[0];
  for (let word of arr){
    if (word.length > longestWord.length){
      longestWord = word;
    }
  }
  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
