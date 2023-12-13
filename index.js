const inquirer = require('inquirer')
const fs = require('fs')

const {Circle, Square, Triangle } = require('./lib/shapes.js')


function generateLogo() {
    inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters for the logo:',
          validate: function (input) {
            return input.length <= 3;
          },
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter text color (keyword or hexadecimal):',
        },
        {
          type: 'list',
          name: 'shapeType',
          message: 'Choose a shape:',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter shape color (keyword or hexadecimal):',
        },
      ])
      .then((answers) => {
        const {text, textColor, shapeType, shapeColor } = answers
        
        let shape;
        switch (shapeType) {
            case 'circle':
                shape = new Circle();
                break;
            
            case 'triangle': {
                shape = new Triangle();
                break;
            }
            case 'square': {
                shape = new Square();
                break
            }
            default:
                console.error('Invalid shape type')
                return 
        }

        shape.setText(text)
        shape.setTextColor(textColor)
        shape.setShapeColor(shapeColor)

        const logoSVG = shape.render()
        fs.writeFileSync('logo.svg',logoSVG)
        console.log('generated logo')
      })
}generateLogo();

module.exports = { generateLogo };

