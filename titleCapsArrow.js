var array = ["hi", "i", "am", "prasanth"];
let arr =  (value) => {
    var result = [];
    for (i = 0; i < array.length; i++) {
       let titlecaps =  value[i].charAt(0).toUpperCase() + value[i].slice(1);
       result.push(titlecaps);
    }
    return result;
}
console.log(arr(array));
