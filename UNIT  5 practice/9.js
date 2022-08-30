// import styled from "styled-component;
// <button>Hemant</button>
// button.hover {
//     red;
// }
// onClick={() => {

// setTheme(theme === "light" ? "dart" : "light");

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 5;
for (var i = 0; i < arr.length; i++) {
  var first = arr[i];
  for (var j = i + 1; j < arr.length; j++) {
    var second = arr[j];
    if (first + second == sum) {
      console.log([i, j]);
    }
  }
}
