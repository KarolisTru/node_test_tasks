function sevenAte9(sequence) {
   
   if(typeof sequence === "number") {
      sequence = sequence.toString();
   }
  const answer = sequence.replace(/(?<=7)9(?=7)/g, "");

  return answer;
}

module.exports = {
  sevenAte9,
};
