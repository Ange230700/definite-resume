// javascript\events\handlers.js

import {
  createHeader,
  createSkillsSection,
  createExperiencesSection,
  createEducationSection,
  createHobbiesSection,
  createIntroductionSection,
} from "../components/creation.js";
import {
  addNewContentToHtmlElement,
  setEducationSection,
  setExperiencesSection,
  setHobbiesSection,
  setIntroductionSection,
  setResumeHeader,
  setSkillsSection,
  setSocialsLinks,
} from "../dom/manipulation.js";
import { resumeWrapper } from "../state/management.js";

function handleResumeContentLoading() {
  addNewContentToHtmlElement(
    resumeWrapper,
    `
      ${createHeader()}
      ${createIntroductionSection()}
      ${createSkillsSection()}
      ${createExperiencesSection()}
      ${createEducationSection()}
      ${createHobbiesSection()}
    `,
  );

  setResumeHeader();
  setSocialsLinks();
  setIntroductionSection();
  setSkillsSection();
  setExperiencesSection();
  setEducationSection();
  setHobbiesSection();
}

export default handleResumeContentLoading;
