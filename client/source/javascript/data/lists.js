// source\javascript\data\lists.js

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
    text: "kouakouangeericstephane@gmail.com",
    id: "mail-link",
  },
  {
    link: "tel:+33759802343",
    text: "+33 7 59 80 23 43",
    id: "phone-link",
  },
  {
    link: "/",
    text: "Nantes",
    id: "location",
  },
];

const hardSkills = [
  "JavaScript",
  "React",
  "Express",
  "PHP",
  "Symphony",
  "Twig",
  "MySQL",
  "Git / Github",
  "TailwindCSS",
  // "Node.js",
  // "HTML",
  // "CSS / SASS",
  // "Bootstrap",
];

const softSkills = [
  "Travail en équipe",
  "Autonomie",
  "Adaptabilité",
  "Rigueur",
  "Agile/SCRUM",
  // "Gestion du temps",
];

const projectsLinks = {
  daf: "https://ongoing-fbi-investigations.vercel.app/",
  quiz: "https://quizz-two-delta.vercel.app/",
  morse_translator: "https://04-can-you-speak-morse.vercel.app/",
  mastermind: "https://08-mastermind.vercel.app/",
  back_office: "http://vps-6604485f.vps.ovh.net/home",
};

const experiencesList = [
  {
    project_description: `Développement d'un back-office pour une association de collectes de déchets: <u><em><a href="${projectsLinks.back_office}" target="_blank">voir le site</a></em></u>`,
    tasks: [
      "Équipe de 3 personnes <strong>|</strong> 2 semaines <strong>|</strong> PHP, Twig, Symfony",
      "Authentification et gestion des droits d'accès",
      "Opérations CRUD",
    ],
  },
  {
    project_description: `Réalisation d'un site affichant les enquêtes en cours du FBI: <u><em><a href="${projectsLinks.daf}" target="_blank">voir le site</a></em></u>`,
    tasks: [
      "Équipe de 3 personnes <strong>|</strong> 2 semaines <strong>|</strong> HTML, CSS, JavaScript",
      "Récupération des données via l'<strong>API</strong> du FBI",
    ],
  },
  {
    project_description: `Réalisation du jeu Mastermind: <u><em><a href="${projectsLinks.mastermind}" target="_blank">voir le site</a></em></u>`,
    tasks: [
      "Travail personnel <strong>|</strong> 1 semaine <strong>|</strong> HTML, CSS, JavaScript",
      "Entraînement sur la logique et l'ordre d'exécution",
    ],
  },
  {
    project_description: `Réalisation d'un quiz: <u><em><a href="${projectsLinks.quiz}" target="_blank">voir le site</a></em></u>`,
    tasks: [
      "Équipe de 4 personnes <strong>|</strong> 2 semaines <strong>|</strong> HTML, CSS, JavaScript",
      "Implémentation d'une application dépendant d'un <strong>timer</strong>",
    ],
  },
  // {
  //   project_description: `Réalisation d'un <u><em><a href="${projectsLinks.morse_translator}" target="_blank">traducteur Morse</a></em></u>`,
  //   tasks: [
  //     "Travail personnel <strong>|</strong> 1 semaine <strong>|</strong> HTML, CSS, JavaScript",
  //     "Manipulation de structures de données telles que des dictionnaires",
  //   ],
  // },
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
