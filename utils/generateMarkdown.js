// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Tble of content
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[Testing](#testing)
  -[Additional Info](#additional-info)

  ##Descripition:
  ${data.description}
  #Installation:
  ${data.installation}
  ##Usage:
  ${data.usage}
  ##Contribution:
  ${data.contribution}
  ##Testing
  ${data.test}
  ##Contact information:
 -Github [${data.github}](htpps://github.com/${data.github})
 -Email: [${data.email}](mailto:user@example.com)


`;
}

module.exports = generateMarkdown;
