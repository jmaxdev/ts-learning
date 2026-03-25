/*
This function sum two numbers, can be numbers or strings
@param {number | string} a - The first number
@param {number | string} b - The second number
@returns {number} The sum of a and b
*/
export const sum = (a: number | string, b: number | string) => {
  const numA = typeof a === "number" ? a : Number(a);
  const numB = typeof b === "number" ? b : Number(b);
  return numA + numB;
};

const result = sum(1, "6");

console.log(result);