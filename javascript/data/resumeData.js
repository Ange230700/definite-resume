// javascript\data\resumeData.js

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
    title: "Développeur Fullstack",
    details:
      "Recherche un contrat d'apprentissage : 4 jours entreprise - 1 jour de formation.",
  },

  contact: {
    socials: socialsList,
  },

  introduction: {
    section_title: "Introduction",
    content:
      "J'ai de solides compétences en technologies frontend et backend. J'ai participé à divers projets web en utilisant des pratiques modernes pour garantir performance et expérience utilisateur optimale. Je souhaite mettre mes compétences au service de solutions innovantes et impactantes.",
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
    section_title: "Formations",
    list: educationList,
  },

  hobbies: {
    section_title: "Hobbies",
    list: hobbiesList,
  },
};

export default resumeData;
