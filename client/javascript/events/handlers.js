// client\javascript\events\handlers.js

import {
  createHeader,
  createContactSection,
  createSkillsSection,
  createExperiencesSection,
  createEducationSection,
  createHobbiesSection,
} from "../components/creation.js";
import {
  addNewContentToHtmlElement,
  setEducationSection,
  setExperiencesSection,
  setHobbiesSection,
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
      ${createContactSection()}
      ${createSkillsSection()}
      ${createExperiencesSection()}
      ${createEducationSection()}
      ${createHobbiesSection()}
    `,
  );

  setResumeHeader();
  setSocialsLinks();
  setSkillsSection();
  setExperiencesSection();
  setEducationSection();
  setHobbiesSection();
}

export default handleResumeContentLoading;
