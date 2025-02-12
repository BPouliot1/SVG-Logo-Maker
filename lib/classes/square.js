const shape = require('./shape');


class square extends shape {
  constructor(text, shapeColor, textColor) {
    super(text, shapeColor, textColor);
  }

  render() {
    return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="200" height="200" fill="${this.shapeColor}"/>
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

module.exports = square;