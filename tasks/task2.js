function sum1(){
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
     sum += arguments[i];
  }

  return sum;
}

function sum2(...args){
  return args.reduce((prev, next) => prev + next, 0);
}

module.exports = {
  sum1,
  sum2
};