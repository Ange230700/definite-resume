// javascript\components\creation.js

function createContactSection() {
  return `
      <div class="contact-wrapper">
        <ul class="socials-wrapper"></ul>
      </div>
  `;
}

function createHeader() {
  return `
    <header>
      <h1></h1>
      <h3></h3>
      <p></p>
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
      <div id="structure">
        <div id="hard">
          <h4></h4>
          <ul class="competences-techniques-list"></ul>
        </div>
        <div id="soft">
          <h4></h4>
          <ul class="soft-skills-list"></ul>
        </div>
      </div>
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
