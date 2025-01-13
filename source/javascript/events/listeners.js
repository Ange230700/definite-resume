// source\javascript\events\listeners.js

import { handleResumeContentLoading } from "./handlers.js";

function waitForLoadingOfResumeContent() {
  document.addEventListener("DOMContentLoaded", handleResumeContentLoading);
}

export { waitForLoadingOfResumeContent };
