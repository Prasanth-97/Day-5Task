let array = ["hi", "i", "am", "prasanth"];
 (function (value) {
    let result = [];
    for (i = 0; i < value.length; i++) {
        let titlecaps =  value[i].charAt(0).toUpperCase() + value[i].slice(1);
        result.push(titlecaps);
    }
    console.log(result);
})
(array);