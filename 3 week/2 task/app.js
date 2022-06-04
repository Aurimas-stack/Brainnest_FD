const getLargerInteger = (int1, int2) => (int1 > int2 ? int1 : int2);

console.log(getLargerInteger(5, 6))
console.log(getLargerInteger(7, 5))


const isIntegerEvenOrOdd = (int) => (int % 2 === 0 ? "Even" : "Odd");

console.log(isIntegerEvenOrOdd(5));
console.log(isIntegerEvenOrOdd(4));
