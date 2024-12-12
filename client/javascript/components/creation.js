// javascript\components\creation.js

function createContactSection() {
  return `
    <section class="contact">
      <div class="contact-wrapper">
        <ul class="socials-wrapper"></ul>
      </div>
    </section>
  `;
}

function createHeader() {
  return `
    <header>
      <h1></h1>
      <h3></h3>
      ${createContactSection()}
    </header>
  `;
}

function createIntroductionSection() {
  return `
    <section class="introduction">
      <h3></h3>
      <p></p>
    </section>
  `;
}

function createSkillsSection() {
  return `
    <section class="competences">
      <h3></h3>
      <h4></h4>
      <ul class="competences-techniques-list"></ul>
      <h4></h4>
      <ul class="soft-skills-list"></ul>
    </section>
  `;
}

function createExperiencesSection() {
  return `
    <section class="experiences">
      <h3></h3>
      <ul class="experiences-list"></ul>
    </section>
  `;
}

function createEducationSection() {
  return `
    <section class="formation">
      <h3></h3>
      <ul class="formation-list"></ul>
    </section>
  `;
}

function createHobbiesSection() {
  return `
    <section class="hobbies">
      <h3></h3>
      <ul></ul>
    </section>
  `;
}

export {
  createHeader,
  createContactSection,
  createIntroductionSection,
  createSkillsSection,
  createExperiencesSection,
  createEducationSection,
  createHobbiesSection,
};
