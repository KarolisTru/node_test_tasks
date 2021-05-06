function sumNumbers(arr){
    let sum = 0;

    if (!Array.isArray(arr)){
        sum += arr;
    } else {
        for (let i = 0; i < arr.length; i++) {
           sum += sumNumbers(arr[i]);
        }
    }

    return sum;
}

module.exports = {
    sumNumbers
}