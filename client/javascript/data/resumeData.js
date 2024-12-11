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
    name: "Ange KOUAKOU",
    title: "Full Stack Developer",
  },

  contact: {
    socials: socialsList,
  },

  introduction: {
    section_title: "Introduction",
    content:
      "Je dispose de solides bases dans les technologies frontend et backend. J'ai contribué à la réalisation de projets web en employant des pratiques modernes pour de meilleures performance et une bonne expérience utilisateur. Mon objectif est de mettre mes compétences à profit pour participer à des solutions innovantes et impactantes.",
  },

  skills: {
    section_title: "Compétences",
    hard_skills_title: "Compétences techniques",
    hard_skills: hardSkills,
    softSkillsTitle: "Soft Skills",
    softSkills: softSkills,
  },

  experiences: {
    section_title: "Projets",
    list: experiencesList,
  },

  education: {
    section_title: "Education",
    list: educationList,
  },

  hobbies: {
    section_title: "Hobbies",
    list: hobbiesList,
  },
};

export default resumeData;
