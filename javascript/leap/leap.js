const isDivisible = num1 => num2 => num1 % num2 === 0;

export const isLeap = year => {
  const yearIsDivisibleBy = isDivisible(year);

  return (
    yearIsDivisibleBy(4) && (!yearIsDivisibleBy(100) || yearIsDivisibleBy(400))
  );
};
