// javascript\functions\loadResumeContent.js

import {
  contact,
  header,
  skillsSection,
  experiencesSection,
  educationSection,
  hobbiesSection,
} from "../components/list.js";
import { getHtmlElement, updateHtmlContent } from "../dom/manipulation.js";

const resumeWrapper = getHtmlElement("#resume-wrapper");

function loadResumeContent() {
  updateHtmlContent(
    resumeWrapper,
    `
      ${header}
      ${contact}
      ${skillsSection}
      ${experiencesSection}
      ${educationSection}
      ${hobbiesSection}
    `,
  );
}

export default loadResumeContent;
