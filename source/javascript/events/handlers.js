// source\javascript\events\handlers.js

import {
  generateHeader,
  generateSkillsSection,
  generateExperiencesSection,
  generateEducationSection,
  generateHobbiesSection,
  generateIntroductionSection,
} from "../components/functional.js";
import {
  addNewContentToHtmlElement,
  setEducationSection,
  setExperiencesSection,
  setHobbiesSection,
  setIntroductionSection,
  setResumeHeader,
  setSkillsSection,
  setSocialsLinks,
} from "../document/manipulation.js";
import { resumeWrapper } from "../state/management.js";

function handleResumeContentLoading() {
  addNewContentToHtmlElement(
    resumeWrapper,
    `
      ${generateHeader()}
      ${generateIntroductionSection()}
      ${generateSkillsSection()}
      ${generateExperiencesSection()}
      ${generateEducationSection()}
      ${generateHobbiesSection()}
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

export { handleResumeContentLoading };
