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
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `*[license](license)`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {console.log(data)
  return `# ${data.title}

  ${licenseBadge(data.license)}
  
  ## TITLE
  # ${data.title}

  ## DESCRIPTION
  # ${data.description}

  ## Installation
  # ${data.installation}

  ## Usage
  # ${data.usage}

  ## Tests
  # ${data.tests}

  ## Application Link
  # ${data.link}

  ## GitHub
  # ${data.github}

  ## Contributors
  # ${data.contributors}

 
`;
}

module.exports = generateMarkdown;
