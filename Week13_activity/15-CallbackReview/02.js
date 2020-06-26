

var sum = function(numOne, numTwo) {
  return numOne + numTwo;
};

var multiply = function(numOne, numTwo) {
  return numOne * numTwo;
};

var addCallBacks = function(functionOne, functionTwo) {
  return functionOne(6, 2) + functionTwo(6, 3);
};

// What does this return?


// this is passing in the function multiply and sum in context 
// the function is being run on line 12 when numbers are being passed into function
addCallBacks(multiply, sum);
