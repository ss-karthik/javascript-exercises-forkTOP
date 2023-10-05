const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let totalSum = 0;
	arr.forEach(element => {
    totalSum += element;
  });

  return totalSum;
};

const multiply = function(arr) {
  let product = 1;
	arr.forEach(element => {
    product *= element;
  });
  return product;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }else {
    return n * factorial(n-1);
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
