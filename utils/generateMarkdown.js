function generateMarkdown(data) {
  return `
# ${data.title}

![Github licence](https://img.shields.io/badge/licence-${data.licence}-readme-red;)

## Description

${data.description}

## Table of Contents
  -Installation
  -Usage
  -Licence
  -Contributing 
  -Tests
  -Questions

## Installation

To run neccessary dependancies, run the following command:
${data.install}

## Usage

This is what the user needs to understand the repo:
${data.usage}

## Licence

The licence for this project:
${data.licence}

## Contributing

This is how the user can contribute to the project:
${data.contribute}

## Tests

This is how to intiate tests:
${data.test}

## Questions

If user need to ask questions:
${data.qs}

`;

}
module.exports = generateMarkdown;
