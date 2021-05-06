let mathFns = {
   add(num) {
      this.answer += num;
      return this;
   },

   subtract(num) {
      this.answer -= num;
      return this;
   },

   multiply(num) {
      this.answer *= num;
      return this;
   },

   divide(num) {
      this.answer /= num;
      return this;
   },
   
   constructor: CalculatorES5
}

CalculatorES5.prototype = mathFns;

function CalculatorES5(initialValue) {
    this.answer = initialValue;
}

class CalculatorES6 {
   constructor(value) {
      this.answer = value;
   }

   add(num) {
      this.answer += num;
      return this;
   }

   subtract(num) {
      this.answer -= num;
      return this;
   }

   multiply(num) {
      this.answer *= num;
      return this;
   }

   divide(num) {
      this.answer /= num;
      return this;
   }
}

module.exports = {
   CalculatorES5,
   CalculatorES6
}


