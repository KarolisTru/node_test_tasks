//Not taking into consideration objects and arrays - they require additional logic w JSON stringify/parse

function removeDuplicates1(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if(isUnique(arr[i], newArr)) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

//helper function for ES5 way
function isUnique(value, arr) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === value) {
            return false;
        } else continue;
    }
    return true;
}

function removeDuplicates2(arr) {
    return [...new Set(arr)];
}

module.exports = {
    removeDuplicates1,
    removeDuplicates2
}