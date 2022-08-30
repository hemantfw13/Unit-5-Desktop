// var arr = [-8, 0, 2, 5];
// var res = "";
// var count = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] != i) {
//     res1 = -1;
//     count++;
//   } else {
//     res = arr[i];
//   }
// }
// if (count >= 1) {
//   console.log("-1");
// } else {
//   console.log(res);
// }
var count = 0;
var count1 = 0;
var arr = [-8, 0, 4, 5];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] == i) {
    count++;
    if (count >= 1) {
      console.log(i);
    }
  } else {
    count1++;
    if (count1 < 1) {
      console.log("-1");
    }
  }
}
