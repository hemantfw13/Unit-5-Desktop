var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 5;
for (var i = 0; i < arr.length; i++) {
  var first = arr[i];
  for (var j = i + 1; j < arr.length; j++) {
    var second = arr[j];
    if (first + second == sum) {
      console.log("true");
    }
  }
}

var str = "hemant";
var i = 0;
function lengthh(i, str) {
  if (str[i] == undefined) {
    return 0;
  }
  return 1 + lengthh(i + 1, str);
}
console.log(lengthh(i, str));

var arr = [-2, 2, 0, 3, 4];
var k = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] == k) {
    console.log(i);
  }
}
