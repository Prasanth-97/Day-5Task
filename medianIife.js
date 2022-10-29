let array1 = [-1,40,71];
let array2 = [4,50,6];
let mergerdArray = [...array1, ...array2];
let sortedarray1 = mergerdArray.sort((a, b) => a - b);
let sortArrayLength = sortedarray1.length;
(function(sortedarray1,sortArrayLength){
if (sortArrayLength % 2 === 0) {
     console.log((sortedarray1[(sortArrayLength / 2) - 1] + sortedarray1[(sortArrayLength) / 2]) / 2);
} else {
   console.log(sortedarray1[Math.floor((sortArrayLength) / 2)]);
}
})
 (sortedarray1,sortArrayLength);
 