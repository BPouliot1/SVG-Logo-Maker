const Circle = require('./classes/circle');
const Square = require('./classes/square');
const Triangle = require('./classes/triangle');

const createShape = ({ shape, text, textColor, shapeColor }) => {
  let renderedShape;

  switch (shape) {
    case 'circle':
      const circle = new Circle(text, textColor, shapeColor);
      renderedShape = circle.render();
      break;
    case 'triangle':
      const triangle = new Triangle(text, textColor, shapeColor);
      renderedShape = triangle.render();
      break;
    case 'square':
      const square = new Square(text, textColor, shapeColor);
      renderedShape = square.render();
      break;
  }

  return renderedShape;
};

module.exports = createShape;