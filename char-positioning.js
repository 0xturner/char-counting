function countIndice (str) {
  var char = str.split(" ").join("").split("");
  var indice = {};
  // console.log(char);

  for (var i = 0; i < char.length; i++) {
    var position = i
    var num = char[i];
    indice[num] = indice[num] ? indice[num] + ", " + position : position.toString();
    // indice[num] = indice[num] ?
  }
  console.log(indice);
}

countIndice("lighthouse in the house");