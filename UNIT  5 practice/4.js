//Z TRANSFORM MATRIX

var mat = [
  [1, 2, 3, 4, 5, 7],
  [5, 6, 7, 8, 5, 6],
  [9, 1, 1, 2, 1, 6],
  [1, 2, 3, 4, 5, 9],
  [9, 1, 1, 2, 1, 6],
  [5, 6, 7, 8, 5, 6],
];
var n = 6;
var m = 6;

var num = [];
var minrow = 0;
var maxrow = n - 1;
var mincol = 0;
var maxcol = m - 1;
var loop = Math.ceil(n / 2);

for (var j = mincol; j < maxcol; j++) {
  num.push(mat[minrow][j]);
}

for (var x = 0; x < n; x++) {
  for (var y = 0; y < m; y++) {
    if (x + y == n - 1) {
      num.push(mat[x][y]);
    }
  }
}

for (var j = mincol + 1; j <= maxcol; j++) {
  num.push(mat[maxrow][j]);
}
console.log(num);
