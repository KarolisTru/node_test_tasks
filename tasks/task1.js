//what if numbers are equal

function range1(x, y){

 if(!Number.isInteger(x) || !Number.isInteger(y)){
   return undefined;
 }

 let newArr = [];

  if (x < y) {
    for (let i = x; i < y; i++) {
      newArr.push(i);
    }
  } else if (x > y) {
    for (let i = x; i > y; i--) {
      newArr.push(i);
    }
  }

  return newArr;
}

function range2(x, y){

  if(!Number.isInteger(x) || !Number.isInteger(y)){
    return undefined;
  }
  const isIncreasing = x < y;
  const length = isIncreasing ? y - x : x - y;

  return Array.from({ length }, (val, index) =>
    isIncreasing ? x + index : x - index
  );
}

module.exports = {
  range1,
  range2
};
