let array1 = [-1,20,71]
let array2 = [4,50,6]
let mergerdArray = [...array1, ...array2]
let sortedarray1 = mergerdArray.sort((a, b) => a - b);
let sortArrayLength = sortedarray1.length
let rotatedarray = function(sortedarray1,sortArrayLength){
if (sortArrayLength % 2 === 0) {
     return (sortedarray1[(sortArrayLength / 2) - 1] + sortedarray1[(sortArrayLength) / 2]) / 2
} else {
   return  sortedarray1[Math.floor((sortArrayLength) / 2)]
}
}
 let result = rotatedarray(sortedarray1,sortArrayLength);
 console.log(result);

