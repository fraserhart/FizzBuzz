const fizzBuzz = require("./fizzBuzz.js");
/*
FizzBuzz

When a number is passed in to FizzBuzz:
    - Return that number unless it meets one of the following criteria: X
    - When a number divisible by 3 is passed in, return `Fizz` x
    - When a number divisible by 5 is passed in, return `Buzz` x
    - When a number divisible by 3 AND 5 is passed in return `FizzBuzz` x
*/

test("returns the number passed in", () => {
  expect(fizzBuzz(1)).toBe(1);
});

test("return Fizz when 3 is passed in", () => {
  expect(fizzBuzz(3)).toBe(`Fizz`);
});

test("return Fizz when a number divisible by 3 is passed in", () => {
  expect(fizzBuzz(6)).toBe("Fizz");
  expect(fizzBuzz(9)).toBe("Fizz");
});

test("return Buzz when 5 is passed in", () => {
  expect(fizzBuzz(5)).toBe(`Buzz`);
});

test("return Buzz when a number divisible by 5 is passed in", () => {
  expect(fizzBuzz(10)).toBe("Buzz");
  expect(fizzBuzz(20)).toBe("Buzz");
});

test("return FizzBuzz when a number divisible by 3 AND 5 is passed in", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
});
