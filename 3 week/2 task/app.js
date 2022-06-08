const getLargerInteger = (int1, int2) => (int1 > int2 ? int1 : int2);

console.log(getLargerInteger(5, 6))
console.log(getLargerInteger(7, 5))

const isIntegerEvenOrOdd = (int) => (int % 2 === 0 ? "Even" : "Odd");

console.log(isIntegerEvenOrOdd(5));
console.log(isIntegerEvenOrOdd(4));

// function createDOMElement(el) {
//   return document.createElement(el);
// }

// function styleDOMElement(el, color) {
//   return (el.style.color = color);
// }

// function setTextContentElement(el, text) {
//   return (el.textContent = text);
// }

// const container = document.getElementById("container");

// const paragraph = createDOMElement("p");
// setTextContentElement(paragraph, "Hey I'm Red!");
// styleDOMElement(paragraph, "red");

// const headingH3 = createDOMElement("h3");
// setTextContentElement(headingH3, "I'm a blue h3!");
// styleDOMElement(headingH3, "blue");

// const headingH1 = createDOMElement("h1");
// setTextContentElement(headingH1, "I'm in a div");

// const anotherParagraph = createDOMElement("p");
// setTextContentElement(anotherParagraph, "ME TOO!");

// const anotherContainer = createDOMElement("div");
// anotherContainer.style.border = "3px solid black";
// anotherContainer.style.backgroundColor = "pink";
// anotherContainer.appendChild(headingH1);
// anotherContainer.appendChild(anotherParagraph);

// container.appendChild(paragraph);
// container.appendChild(headingH3);
// container.appendChild(anotherContainer);
