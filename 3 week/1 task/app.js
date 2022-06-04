const squareDiagonal = (length) => (length * Math.sqrt(2)).toFixed(3);

console.log(`Diagonal square area: ${squareDiagonal(9)} `);

const triangleArea = (...lengths) =>
  (
    0.25 *
    Math.sqrt(
      (lengths[0] + lengths[1] + lengths[2]) *
        (-lengths[0] + lengths[1] + lengths[2]) *
        (lengths[0] - lengths[1] + lengths[2]) *
        (lengths[0] + lengths[1] - lengths[2])
    )
  ).toFixed(3);

console.log(`Triangle area: ${triangleArea(5, 6, 7)} `);

const circleAreaAndCircumference = (radius) => {
  return `Area: ${(Math.PI * Math.pow(radius, 2)).toFixed(3)}, 
  Circumference: ${(2 * Math.PI * radius).toFixed(3)}`;
};

console.log(circleAreaAndCircumference(5));
