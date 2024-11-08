// javascript\dom\elements.js

const resumeTitle = document.querySelector("#resume-title");
const contactSectionTitle = document.querySelector(
  "#contact-section h3.title-area",
);
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone-number");
const socialsContainer = document.querySelector("#socials-container");
const skillsSection = document.querySelector("#skills");
const skillsSectionTitle = document.querySelector("#skills h3.title-area");
const skillsTypeTitles = document.querySelectorAll(
  "#skills h4.skills-type-title",
);
const hardSkillsList = document.querySelector("#hard-skills");
const softSkillsList = document.querySelector("#soft-skills");
const experiencesSection = document.querySelector("#experiences");
const experiencesSectionTitle = document.querySelector(
  "#experiences h3.title-area",
);
const experiencesContainer = document.querySelector("#experiences-container");
const educationSection = document.querySelector("#education");
const educationSectionTitle = document.querySelector(
  "#education h3.title-area",
);
const educationContainer = document.querySelector("#schools-and-courses");

export {
  resumeTitle,
  contactSectionTitle,
  email,
  phoneNumber,
  socialsContainer,
  skillsSection,
  skillsSectionTitle,
  skillsTypeTitles,
  hardSkillsList,
  softSkillsList,
  experiencesSection,
  experiencesSectionTitle,
  experiencesContainer,
  educationSection,
  educationSectionTitle,
  educationContainer,
};
