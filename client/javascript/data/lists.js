// client\javascript\data\lists.js

const socialsList = [
  {
    link: "https://www.linkedin.com/in/janedoe/",
    text: "LinkedIn",
    id: "linkedin-link",
  },
  {
    link: "https://github.com/janedoe",
    text: "GitHub",
    id: "github-link",
  },
  {
    link: "http://vps-80a85dd9.vps.ovh.net:5000/",
    text: "Portfolio",
    id: "portfolio-link",
  },
];

const hardSkills = ["Python", "Django", "REST APIs", "SQL", "Docker"];

const softSkills = ["Critical Thinking", "Time Management", "Team Leadership"];

const experiencesList = [
  {
    project_description: "Backend Developer at Tech Solutions",
    tasks: [
      "Developed RESTful APIs using Django REST Framework.",
      "Implemented authentication and authorization systems.",
      "Optimized database queries for performance.",
    ],
  },
  {
    project_description: "Software Engineer Intern at CodeWorks",
    tasks: [
      "Assisted in developing microservices architecture.",
      "Wrote unit tests and documentation.",
      "Collaborated with frontend developers to integrate APIs.",
    ],
  },
  // Add more experiences if needed
];

const educationList = [
  {
    formation_title: "Master of Science in Computer Science",
    school: "Tech University",
    formation_span: "2018 - 2020",
  },
  {
    formation_title: "Bachelor of Science in Information Technology",
    school: "State College",
    formation_span: "2014 - 2018",
  },
  // Add more education entries if needed
];

const hobbiesList = [
  "Photography",
  "Traveling",
  "Reading Sci-Fi novels",
  "Volunteering at local shelters",
  // Add more hobbies if needed
];

export {
  socialsList,
  hardSkills,
  softSkills,
  experiencesList,
  educationList,
  hobbiesList,
};
