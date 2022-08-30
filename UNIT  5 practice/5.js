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
for (var x = 0; x < n; x++) {
  for (var y = 0; y < m; y++) {
    if (x == y) {
      num.push(mat[x][y]);
    }
  }
}
console.log(num);
