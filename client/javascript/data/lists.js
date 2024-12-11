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
    link: "http://vps-80a85dd9.vps.ovh.net:5000/",
    text: "Portfolio",
    id: "portfolio-link",
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

const experiencesList = [
  {
    project_description: "Réalisation d'un service de contenus vidéo",
    tasks: [
      "Permettre aux utilisateurs d'accéder à une grande variété de contenus vidéo",
      "Implémenter le filtrage via une barre de recherche et la catégorisation des vidéos",
      "Intégrer l'authentification des utilisateurs pour un accès sécurisé et personnalisé",
      "Administrer la base de données pour une gestion optimale des contenus via une interface d'administration",
    ],
  },
  {
    project_description:
      "Réalisation d'une application permettant d'accéder à la plupart des radios du monde entier",
    tasks: [
      "Récupérer la liste des stations radios via une API existante",
      "Implémenter le filtrage par nom de station, pays et genre de radio",
      "Implémenter le contrôle de lecture des radios",
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
