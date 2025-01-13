// source\javascript\components\functional.js

function generateContactSection() {
  return `
      <div class="contact-wrapper">
        <ul class="socials-wrapper"></ul>
      </div>
  `;
}

function generateHeader() {
  return `
    <header>
      <h1></h1>
      <h3></h3>
      <p></p>
      ${generateContactSection()}
    </header>
  `;
}

function generateIntroductionSection() {
  return `
    <section class="introduction">
      <h3></h3>
      <p></p>
    </section>
  `;
}

function generateSkillsSection() {
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

function generateExperiencesSection() {
  return `
    <section class="experiences">
      <h3></h3>
      <ul class="experiences-list"></ul>
    </section>
  `;
}

function generateEducationSection() {
  return `
    <section class="formation">
      <h3></h3>
      <ul class="formation-list"></ul>
    </section>
  `;
}

function generateHobbiesSection() {
  return `
    <section class="hobbies">
      <h3></h3>
      <ul></ul>
    </section>
  `;
}

export {
  generateHeader,
  generateContactSection,
  generateIntroductionSection,
  generateSkillsSection,
  generateExperiencesSection,
  generateEducationSection,
  generateHobbiesSection,
};
