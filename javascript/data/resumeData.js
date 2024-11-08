// javascript\data\resumeData.js

import socialsList from "./socialsList.js";
import hardSkills from "./hardSkills.js";
import softSkills from "./softSkills.js";
import experiencesList from "./experiencesList.js";
import educationList from "./educationList.js";

const resumeData = {
  resumeTitle: "Jane Doe's Resume",

  contact: {
    sectionTitle: "Contact",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phoneNumber: "+1 (555) 987-6543",
    address: "456 Elm Street, Hometown, Country",
    socials: socialsList,
  },

  skills: {
    sectionTitle: "Skills",
    hardSkillsTitle: "Technical Skills",
    hardSkills: hardSkills,
    softSkillsTitle: "Soft Skills",
    softSkills: softSkills,
  },

  experiences: {
    sectionTitle: "Experience",
    list: experiencesList,
  },

  education: {
    sectionTitle: "Education",
    list: educationList,
  },
};

export default resumeData;
