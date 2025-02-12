const shape = require('./shape');


class triangle extends shape {
  constructor(text, shapeColor, textColor) {
    super(text, shapeColor, textColor);
  }

  render() {
    return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon x="10" y="10" width="200" height="200" points="100 15, 200 200, 0 200"  fill="${this.shapeColor}"/>
          <text x="100" y="185" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
    `;
  }
}

module.exports = triangle;