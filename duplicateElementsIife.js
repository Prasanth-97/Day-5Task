let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
 (function (arr) {
    let result = [];
    for (i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1)
        {
            result.push(arr[i]);
        }

    }
    console.log(result);
})
(arr);
