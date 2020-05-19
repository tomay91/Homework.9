const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const dotenv = require("dotenv");
const generateMarkdown = require("./utils/generateMarkdown");


const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
    
    {
        type: "input",
        message: "What is your Github username?",
        name: "username",
    }
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    }
    {
        type: "input",
        message: "Give a desciption of your project",
        name: "project",
    }
    {
        type: "input",
        message: "What is your repository name?",
        name: "repository",
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