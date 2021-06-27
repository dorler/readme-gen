// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

${data.description}

## License

${data.license}
![${data.license}](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Installation

\`\`\`
${data.installationRequirements}
\`\`\`

## Usage

${data.usageInformation}

## Test Instructions

\`\`\`
${data.testInstructions} 
\`\`\`

## Questions

\`\`\`
Github: ${data.githubUsername}
\`\`\`

\`\`\`
Email Address: ${data.emailAddress}
\`\`\`
`;
}

module.exports = generateMarkdown;
