let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function (arr) {
    let initialvalue = 0;
    let result = arr.reduce((previousvalue, currentvalue) => previousvalue + currentvalue, initialvalue);
    console.log(result);
})
(array);
