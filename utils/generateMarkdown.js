// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return`![badge](https://img.sheilds.io/badge/license-${license}-blue)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {console.log(data)
  return `
  
  ## TITLE
  # ${data.title}

  ## DESCRIPTION
  # ${data.description}

 
`;
}

module.exports = generateMarkdown;
