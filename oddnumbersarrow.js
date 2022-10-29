var array = [1, 2, 3, 11, 4 ,7 , 9 ,23, 34]
let arr =  (value) => {
  var result = [];
  for (i = 0; i < array.length; i++) {
    if (value[i] % 2 !== 0) {
      result.push(value[i]);
    }
  }
  return result;
}
console.log(arr(array));