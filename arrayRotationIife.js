let array = [2, 5, 7, 9, 1, 8];
let k = 3; // k represents no of rotations
let len = array.length;
 (function (arr, k, n) {
    k = k % n;
    let result1 = [];
    let result2 = [];
    for (i = 0; i < n; i++) {
        if (i < k) {
            result1.push(arr[n + i - k]);
        }
        else {
            result2.push(arr[i - k])
        }
    }
    const result = result1.concat(result2);
    console.log(result);
})
(array, k, len);