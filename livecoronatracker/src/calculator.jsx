function Add(a, b) {
  let sum = a + b;
  return sum;
}

function Subtract(a, b) {
  let sub = a - b;
  return sub;
}

function Division(a, b) {
  let div = a / b;
  div = div.toFixed(2); //  allows only two digit to show after decimal
  return div;
}

function multi(a, b) {
  let mult = a * b;
  return mult;
}

// export default calculator;
export { Add, Subtract, multi, Division }; // remamber the curly bracess
