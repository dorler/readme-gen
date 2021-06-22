// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #${data.title}
   ${data.description} 
  
  #Installation Requirements
  -${data.installationRequirements}

  #Usage Information
  -${data.usageInformation}

  #Test Instructions
  -${data.testInstructions} 
  
  #Questions
  -${data.githubUsername}
`;
}

module.exports = generateMarkdown;
