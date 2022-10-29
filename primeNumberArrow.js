let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let primeNumber =  (num) => {
    let result = []
    for (let i = 0; i < num.length; i++) {
        if (isPrime(num[i])) {
            result.push(num[i]);
           
        }
    }
    return result ;
}

let isPrime = (num) => {
    if (num < 2) {
        return false
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(primeNumber(num));