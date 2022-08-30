// var data = "A Transformation in education";
// var result = "";
// var line = data.split(" ");
// for (var i = line.length - 1; i >= 0; i--) {
//   result = result + line[i] + " ";
// }
// console.log(result); //education in Transformation A

// var data = "A Transformation in education";
// var result = "";
// var line = data.split("");
// for (var i = line.length - 1; i >= 0; i--) {
//   result = result + line[i] + "";
// }
// console.log(result); //noitacude ni noitamrofsnarT A

var data = "A Transformation in education";
var result = "";
var line = data.split(" ");
for (var i = 0; i < line.length; i++) {
  for (var j = line[i].length - 1; j >= 0; j--) {
    result = result + line[i][j] + "";
  }
}
console.log(result); //AnoitamrofsnarTninoitacude
