// client\javascript\data\lists.js

const socialsList = [
  {
    link: "https://www.linkedin.com/in/ange-kouakou/",
    text: "LinkedIn",
    id: "linkedin-link",
  },
  {
    link: "https://github.com/Ange230700",
    text: "GitHub",
    id: "github-link",
  },
  {
    link: "https://the-real-portfolio-client.vercel.app/",
    text: "Portfolio",
    id: "portfolio-link",
  },
  {
    link: "mailto:kouakouangeericstephane@gmail.com",
    text: "Mail",
    id: "mail-link",
  },
  {
    link: "tel:+33759802343",
    text: "Téléphone",
    id: "phone-link",
  },
  {
    link: "/",
    text: "44000, Nantes",
    id: "location",
  },
];

const hardSkills = [
  "HTML",
  "CSS / SASS",
  "Javascript",
  "React",
  "Express",
  "Node.js",
  "MySQL",
];

const softSkills = [
  "Travail en équipe",
  "Autonomie",
  "Adaptabilité",
  "Gestion du temps",
];

const projectsLinks = {
  daf: "https://ongoing-fbi-investigations.vercel.app/",
  quiz: "https://quizz-two-delta.vercel.app/",
  morse_translator: "https://04-can-you-speak-morse.vercel.app/",
  mastermind: "https://08-mastermind.vercel.app/",
};

const experiencesList = [
  {
    project_description: `Réalisation d'un site affichant les enquêtes en cours du FBI: <u><em><a href="${projectsLinks.daf}">DAF</a></em></u>`,
    tasks: [
      "Équipe de 3 personnes <strong>|</strong> 2 semaines <strong>|</strong> HTML, CSS, JavaScript",
      "Récupération des données via l'<strong>API</strong> du FBI",
    ],
  },
  {
    project_description: `Réalisation d'un <u><em><a href="${projectsLinks.quiz}">quizz</a></em></u>`,
    tasks: [
      "Équipe de 4 personnes <strong>|</strong> 2 semaines <strong>|</strong> HTML, CSS, JavaScript",
      "Implémentation d'une application dépendant d'un <strong>timer</strong>",
    ],
  },
  {
    project_description: `Réalisation d'un <u><em><a href="${projectsLinks.morse_translator}">traducteur Morse</a></em></u>`,
    tasks: [
      "Travail personnel <strong>|</strong> 1 semaine <strong>|</strong> HTML, CSS, JavaScript",
      "Manipulation de structures de données telles que des dictionnaires",
    ],
  },
  {
    project_description: `Réalisation du jeu <u><em><a href="${projectsLinks.mastermind}">Mastermind</a></em></u>`,
    tasks: [
      "Travail personnel <strong>|</strong> 1 semaine <strong>|</strong> HTML, CSS, JavaScript",
      "Entraînement sur la logique et l'ordre d'exécution",
    ],
  },
];

const educationList = [
  {
    formation_title: "Formation Développeur•se Web et Mobile",
    school: "ADA Tech School",
    formation_span: "Depuis 10/2024",
  },
  {
    formation_title: "Bootcamp Développement Web",
    school: "Wild Code School",
    formation_span: "10/2023 - 02/2024",
  },
  {
    formation_title: "Bachelor informatique",
    school: "Ynov Campus de Nantes",
    formation_span: "09/2022 - 05/2023",
  },
  {
    formation_title: "Prépa informatique intégrée",
    school: "CESI Toulouse",
    formation_span: "09/2021 - 05/2022",
  },
  {
    formation_title: "Formation ingénieur électronique embarqué",
    school: "CESI Toulouse",
    formation_span: "09/2020 - 05/2021",
  },
  {
    formation_title: "Prépa technologique intégrée",
    school: "CESI Saint-Nazaire",
    formation_span: "09/2019 - 05/2020",
  },
  {
    formation_title: "Cycle Préparatoire Scientifique",
    school: "LFBP Abidjan, Côte d'Ivoire",
    formation_span: "09/2017 - 07/2019",
  },
];

const hobbiesList = ["Apprentissage autodidacte du piano"];

export {
  socialsList,
  hardSkills,
  softSkills,
  experiencesList,
  educationList,
  hobbiesList,
};
