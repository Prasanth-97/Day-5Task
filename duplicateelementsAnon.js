let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
let removingduplicates = function (arr) {
    let result = [];
    for (i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1)
        {
            result.push(arr[i]);
        }

    }
    return result;
}
let output = removingduplicates(arr);
console.log(output);