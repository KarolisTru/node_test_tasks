function sum(x) {
  return (y) =>
    typeof x === "number" && typeof y === "number" ? x + y : undefined;
}

module.exports = {
  sum,
};
