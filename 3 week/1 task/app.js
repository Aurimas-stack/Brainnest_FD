const squareDiagonal = (length) => (length * Math.sqrt(2)).toFixed(3);

const triangleArea = () =>
  (
    0.25 * Math.sqrt((5 + 6 + 7) * (-5 + 6 + 7) * (5 - 6 + 7) * (5 + 6 - 7))
  ).toFixed(3);

const circleAreaAndCircumference = (radius) => {
  return `Area: ${(Math.PI * Math.pow(radius, 2)).toFixed(
    3
  )}, Circumference: ${(2 * Math.PI * radius).toFixed(3)}`;
};

console.log(circleAreaAndCircumference(5));
