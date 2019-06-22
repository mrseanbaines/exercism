export const validate = input => {
  return (
    input
      .toString()
      .split('')
      .reduce((sum, num, i, arr) => {
        return sum + Math.pow(parseInt(num, 10), arr.length);
      }, 0) === input
  );
};
