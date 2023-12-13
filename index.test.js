// index.test.js

const { generateLogo } = require('./index');
const inquirer = require('inquirer');
const fs = require('fs');

// Mocking inquirer and fs modules
jest.mock('inquirer');
jest.mock('fs');

describe('generateLogo', () => {
  test('should generate a logo file based on user input', async () => {
    // Mock inquirer.prompt to return a Promise
    inquirer.prompt.mockResolvedValue({
      text: 'ABC',
      textColor: 'red',
      shapeType: 'circle',
      shapeColor: 'blue',
    });

    Circle.prototype.render = jest.fn().mockReturnValue('<circle>Mocked Circle SVG</circle>');

    await generateLogo();

   
    expect(Circle).toHaveBeenCalledWith();
    expect(Circle.prototype.setText).toHaveBeenCalledWith('ABC');
    expect(Circle.prototype.setTextColor).toHaveBeenCalledWith('red');
    expect(Circle.prototype.setShapeColor).toHaveBeenCalledWith('blue');
    expect(Circle.prototype.render).toHaveBeenCalled();

    // Verify that fs.writeFileSync was called with the correct filename and content
    expect(fs.writeFileSync).toHaveBeenCalledWith('logo.svg', '<circle>Mocked Circle SVG</circle>');

    // Clean up mocks
    jest.restoreAllMocks();
  });
});
