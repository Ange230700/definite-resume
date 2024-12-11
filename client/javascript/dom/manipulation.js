// client\javascript\dom\manipulation.js

import resumeData from "../data/resumeData.js";

/* ———— HELPERS ———— */
function getHtmlElement(selector) {
  return document.querySelector(selector);
}

function getHtmlElementsArray(selector) {
  return document.querySelectorAll(selector);
}

function setHtmlElementContent(htmlElement, content) {
  htmlElement.innerHTML = content;
}

function addNewContentToHtmlElement(htmlElement, content) {
  htmlElement.innerHTML += content;
}

/* ———— HEADER ———— */
function setResumeHeader() {
  setHtmlElementContent(getHtmlElement("header h1"), resumeData.header.name);
  setHtmlElementContent(getHtmlElement("header h3"), resumeData.header.title);
}

/* ———— CONTACT ———— */
function setSocialsLinks() {
  resumeData.contact.socials.forEach((social) => {
    const li = document.createElement("li");
    li.classList.add("socials");
    li.id = social.id;

    const a = document.createElement("a");
    a.classList.add("socials-link-text");
    a.href = social.link;

    a.appendChild(document.createTextNode(` ${social.text}`));

    li.appendChild(a);
    getHtmlElement(".socials-wrapper").appendChild(li);
  });
}

/* ———— INTRODUCTION ———— */
function setIntroductionSection() {
  setHtmlElementContent(
    getHtmlElement(".introduction h3"),
    resumeData.introduction.section_title,
  );

  setHtmlElementContent(
    getHtmlElement(".introduction p"),
    resumeData.introduction.content,
  );
}

/* ———— SKILLS ———— */
function setSkillsSection() {
  setHtmlElementContent(
    getHtmlElement(".competences").querySelector("h3"),
    resumeData.skills.section_title,
  );

  setHtmlElementContent(
    getHtmlElement(".competences").querySelector("h4:nth-of-type(1)"),
    resumeData.skills.hard_skills_title,
  );
  resumeData.skills.hard_skills.forEach((skill) => {
    const li = document.createElement("li");
    li.classList.add("competences-techniques-list-item");
    li.textContent = skill;
    getHtmlElement(".competences")
      .querySelector(".competences-techniques-list")
      .appendChild(li);
  });

  setHtmlElementContent(
    getHtmlElement(".competences").querySelector("h4:nth-of-type(2)"),
    resumeData.skills.softSkillsTitle,
  );
  resumeData.skills.softSkills.forEach((skill) => {
    const li = document.createElement("li");
    li.classList.add("soft-skills-list-item");
    li.textContent = skill;
    getHtmlElement(".competences")
      .querySelector(".soft-skills-list")
      .appendChild(li);
  });
}

/* ———— EXPERIENCES ———— */
function setExperiencesSection() {
  setHtmlElementContent(
    getHtmlElement(".experiences").querySelector("h3"),
    resumeData.experiences.section_title,
  );

  resumeData.experiences.list.forEach((experience) => {
    const li = document.createElement("li");
    li.classList.add("experiences-list-item");

    const projectTitle = document.createElement("h4");
    projectTitle.innerText = `● ${experience.project_description}`;
    li.appendChild(projectTitle);

    const tasksList = document.createElement("ul");
    experience.tasks.forEach((task) => {
      const taskLi = document.createElement("li");
      taskLi.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;- ${task}`;
      tasksList.appendChild(taskLi);
    });

    li.appendChild(tasksList);
    getHtmlElement(".experiences")
      .querySelector(".experiences-list")
      .appendChild(li);
  });
}
/* ———— EDUCATION ———— */
function setEducationSection() {
  setHtmlElementContent(
    getHtmlElement(".formation").querySelector("h3"),
    resumeData.education.section_title,
  );

  const formationListElement =
    getHtmlElement(".formation").querySelector(".formation-list");
  resumeData.education.list.forEach((educationItem) => {
    const li = document.createElement("li");
    li.classList.add("formation-list-item");

    const formationTitle = document.createElement("p");
    formationTitle.classList.add("formation-title-and-school");
    formationTitle.innerText = `${educationItem.formation_title} | `;
    li.appendChild(formationTitle);

    const school = document.createElement("span");
    school.classList.add("school");
    school.innerText = educationItem.school;
    formationTitle.appendChild(school);

    const formationSpan = document.createElement("p");
    formationSpan.classList.add("formation-date");
    formationSpan.innerText = educationItem.formation_span;
    li.appendChild(formationSpan);

    formationListElement.appendChild(li);
  });
}

/* ———— HOBBIES ———— */
function setHobbiesSection() {
  setHtmlElementContent(
    getHtmlElement(".hobbies").querySelector("h3"),
    resumeData.hobbies.section_title,
  );

  resumeData.hobbies.list.forEach((hobby) => {
    const li = document.createElement("li");
    li.textContent = hobby;
    getHtmlElement(".hobbies").querySelector("ul").appendChild(li);
  });
}

export {
  getHtmlElement,
  getHtmlElementsArray,
  setHtmlElementContent,
  addNewContentToHtmlElement,
  setResumeHeader,
  setSocialsLinks,
  setIntroductionSection,
  setSkillsSection,
  setExperiencesSection,
  setEducationSection,
  setHobbiesSection,
};
