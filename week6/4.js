function createBase(base) {
  const innerFunction = function (number) {
      return base + number;
  };

  return innerFunction;
}

let addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));