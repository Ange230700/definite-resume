// javascript\functions\injectResumeTitle.js

import { resumeTitle } from "../dom/elements.js";
import resumeData from "../data/resumeData.js";

function injectResumeTitle() {
  if (!resumeTitle || !resumeData.resumeTitle) {
    console.error("Missing resume title element or data");
    return;
  }

  resumeTitle.innerText = resumeData.resumeTitle;
}

export default injectResumeTitle;
