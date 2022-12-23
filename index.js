
const sum = (fromN, toN) => {
  let total = 0; 

  const count = (start, end) => {
    total += start;
    return start !== end && (start++, count(start, end));
  }

  count(fromN, toN);

  return total;
}

module.exports = sum;