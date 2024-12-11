// client\javascript\data\resumeData.js

import {
  socialsList,
  hardSkills,
  softSkills,
  experiencesList,
  educationList,
  hobbiesList,
} from "./lists.js";

const resumeData = {
  header: {
    name: "Jane Doe",
    title: "Full Stack Developer",
  },

  contact: {
    socials: socialsList,
  },

  introduction: {
    section_title: "Introduction",
    content:
      "Driven and passionate Full Stack Developer with a focus on front-end development. I have a strong foundation in web technologies and programming languages such as HTML, CSS, JavaScript, React, and Node.js. I am a quick learner and a team player who is always looking to improve my skills and knowledge.",
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
