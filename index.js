const inquirer = require("inquirer")
const fs = require("fs");
const util = require("util");
const dotenv = require("dotenv");
const generateMarkdown = require("./utils/generateMarkdown");


const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your github username?"
          },
          {
            type: "input",
            name: "title",
            message: "What is your project title?"
          },
          {
            type: "input",
            name: "description",
            message: "Give a description of your project?",
          },
          {
            type: "input",
            name: "usage",
            message: "What is your repository name?"
          },
          
          {
            type: "input",
            name: "contribute",
            message: "Who are the other contributers to the project??"
          }
         
        ]);
      }   
    
async function init() {
    try {
        const answers = await promptUser();
        const readme = generateMarkdown(answers);
        await writeFileAsync ("readme.md", readme);
        console.log ("Successfully wrote to readme.md");
    }
    catch (err) {
        console.log(err)
    }
}
init();
