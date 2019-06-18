export const steps = n => {
  let num = n;
  let count = 0;

  if (num <= 0) {
    throw new Error('Only positive numbers are allowed');
  }

  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num *= 3;
      num += 1;
    }

    count += 1;
  }

  return count;
};
