// shape.js

class Shape {
    constructor() {
      this.text = '';
      this.textColor = '';
      this.shapeColor = '';
    }
  
    setText(text) {
      this.text = text;
    }
  
    setTextColor(textColor) {
      this.textColor = textColor;
    }
  
    setShapeColor(shapeColor) {
      this.shapeColor = shapeColor;
    }
  
    render() {
      // The base Shape class doesn't define a specific shape, so it returns an empty string.
      return '';
    }
  }
  
  class Circle extends Shape {
    render() {
      return `
      <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" stroke-width="5" />
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
      `;
    }
  }
  
  class Square extends Shape {
    render() {
      return `
      <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" stroke-width="5" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
      `;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `
      <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150 25, 225 175, 75 175" fill="${this.shapeColor}" stroke-width="5" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
      `;
    }
  }
  
  module.exports = { Shape, Circle, Square, Triangle };
  