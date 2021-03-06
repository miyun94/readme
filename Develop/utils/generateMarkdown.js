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
  Here are the steps to get the application up and running: 
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ### Screenshot
  The following image is a screenshot of the how the application should once finished:
  <br/>
  <br/>
  ![screenshot](${data.screenshot})

  ## License 
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br/>
  This application is under the ${data.license} license. 

  ## Contributors 
  [${data.credits}](https://github.com/${data.credits})

  For any future contributions, please contact the following person below. 

  ## Further Questions?
  Find me on GitHub: [${data.username}](https://github.com/${data.username})<br/>
  Send an email: ${data.email}
  
`;
}

module.exports = generateMarkdown;
