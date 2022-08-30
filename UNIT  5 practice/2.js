var mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
var N = 3;
var M = 4;
var num = [];

var loop = Math.ceil(N / 2);

var minrow = 0; // top = 0
var mincol = 0; // left =0;
var maxrow = N - 1; //bottom =N-1;
var maxcol = M - 1; // right = M-1

for (var i = 0; i < loop; i++) {
  if (num.length == N * M) {
    break;
  }

  for (var j = maxrow; j >= minrow; j--) {
    num.push(mat[j][mincol]);
  }
  mincol++;

  if (num.length == N * M) {
    break;
  }
  //---------------------------------------------
  for (var j = mincol; j <= maxcol; j++) {
    num.push(mat[minrow][j]);
  }
  minrow++;
  if (num.length == N * M) {
    break;
  }

  //---------------------------------------------

  for (var j = minrow; j <= maxrow; j++) {
    num.push(mat[j][maxcol]);
  }
  maxcol--;

  if (num.length == N * M) {
    break;
  }
  //---------------------------------------------
  for (var j = maxcol; j >= minrow; j--) {
    num.push(mat[maxrow][j]);
  }
  maxrow--;
}
console.log(num.join(" "));
