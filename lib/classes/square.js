const shape = require('./shape');


class square extends shape {
  constructor(text, shapeColor, textColor) {
    super(text, shapeColor, textColor);
  }

  render() {}
}

module.exports = square;