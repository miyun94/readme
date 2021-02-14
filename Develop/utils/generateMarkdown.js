// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectname}
  
  ## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#License)
- [Contributors](#Contributors)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  This project 
  ## Contributers 
  ${data.credits}

  ## Further Questions?
  Find me on GitHub: [${data.username}](https://github.com/${data.username})<br/>
  Send an email: ${data.email}
  

`;
}

module.exports = generateMarkdown;
