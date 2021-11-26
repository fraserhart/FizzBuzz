const divisibleByThree = (num) => {
  return num % 3 === 0;
};

const divisibleByFive = (num) => {
  return num % 5 === 0;
};

const fizzBuzz = (num) => {
  if (divisibleByThree(num) && divisibleByFive(num)) return `FizzBuzz`;
  if (divisibleByThree(num)) return `Fizz`;
  if (divisibleByFive(num)) return `Buzz`;
  return num;
};

module.exports = fizzBuzz;
