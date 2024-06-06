const createShape = require('./lib/createshape');
const FileService = require('./lib/classes/fileservice');
const questions = require('./lib/questions');
const inquirer = require('inquirer');

const promptUser = () => {
  inquirer
    .prompt([...questions])
    .then((answers) => {
      console.log(answers);
      const shape = createShape(answers);
      const fileService = new FileService('./examples/logo.svg', shape);
      fileService.writeToFile();
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log('Something went wrong');
      }
    });
};

const init = () => {
  promptUser();
};

init();