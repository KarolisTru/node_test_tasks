function spy(func) {
  let callCount = 0;

  return function wrapper() {
    callCount++;
    wrapper.report = function () {
      return ({ totalCalls: callCount });
    };
    return func.apply(this, arguments);
  };
}

module.exports = {
  spy
}
