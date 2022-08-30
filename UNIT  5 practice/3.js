//SPIRAL MATRIX

var mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [3, 4, 5, 6],
  [7, 6, 5, 4],
  [2, 3, 4, 5],
];
var n = 5;
var m = 4;
var num = [];
var minrow = 0;
var maxrow = n - 1;
var mincol = 0;
var maxcol = m - 1;
var loop = Math.ceil(n / 2);

for (var i = 0; i < loop; i++) {
  if (num.length == n * m) {
    break;
  }
  for (var j = mincol; j <= maxcol; j++) {
    num.push(mat[maxrow][j]);
  }
  maxrow--;
  if (num.length == n * m) {
    break;
  }
  for (var j = maxrow; j >= minrow; j--) {
    num.push(mat[j][maxcol]);
  }
  maxcol--;
  if (num.length == n * m) {
    break;
  }
  for (var j = maxcol; j >= mincol; j--) {
    num.push(mat[minrow][j]);
  }
  minrow++;
  if (num.length == n * m) {
    break;
  }
  for (var j = minrow; j <= maxrow; j++) {
    num.push(mat[j][mincol]);
  }
  mincol++;
  if (num.length == n * m) {
    break;
  }
}
console.log(num.join(" "));
