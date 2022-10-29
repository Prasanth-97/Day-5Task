let array = ["prasanth", "madam", "radar", "refer", "chennai"];
(function (arr) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        if (ispalindrome(arr[i])) {
            result.push(arr[i]);
        }
    }
    console.log(result);
})
    (array);

function ispalindrome(arr) {
    let a = arr;
    arr = arr.split("").reverse().join("");
    return a == arr;

}
