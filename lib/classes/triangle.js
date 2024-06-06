const shape = require('./shape');


class triangle extends shape {
  constructor(text, shapeColor, textColor) {
    super(text, shapeColor, textColor);
  }

  render() {}
}

module.exports = triangle;