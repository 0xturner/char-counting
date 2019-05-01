function countLetters(str) {
  var counts = {};
  var char = str.split(" ").join("").split("");
  // console.log(char);

  for (var i = 0; i < char.length; i++) {
    var num = char[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    // counts[char[i]] = 0;
  }
  console.log(counts);
}


countLetters("lighthouse in the house");