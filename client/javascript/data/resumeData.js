// client\javascript\data\resumeData.js

import socialsList from "./socialsList.js";
import hardSkills from "./hardSkills.js";
import softSkills from "./softSkills.js";
import experiencesList from "./experiencesList.js";
import educationList from "./educationList.js";
import hobbiesList from "./hobbiesList.js";

const resumeData = {
  header: {
    name: "Jane Doe",
    title: "Full Stack Developer",
  },

  contact: {
    socials: socialsList,
  },

  skills: {
    section_title: "Skills",
    hard_skills_title: "Technical Skills",
    hard_skills: hardSkills,
    softSkillsTitle: "Soft Skills",
    softSkills: softSkills,
  },

  experiences: {
    section_title: "Experience",
    list: experiencesList,
  },

  education: {
    section_title: "Education",
    list: educationList,
  },

  hobbies: {
    section_title: "Hobbies & Interests",
    list: hobbiesList,
  },
};

export default resumeData;
