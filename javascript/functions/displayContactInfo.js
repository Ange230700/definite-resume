// javascript\functions\displayContactInfo.js

import {
  contactSectionTitle,
  email,
  phoneNumber,
  socialsContainer,
} from "../dom/elements.js";
import resumeData from "../data/resumeData.js";

function displayContactInfo() {
  if (!contactSectionTitle || !resumeData?.contact?.sectionTitle) {
    console.error("Missing contact section title element or data");
    return;
  }
  contactSectionTitle.innerText = resumeData.contact.sectionTitle;

  if (!email || !resumeData?.contact?.email) {
    console.error("Missing email element or data");
    return;
  }
  email.innerText = resumeData.contact.email;

  if (!phoneNumber || !resumeData?.contact?.phoneNumber) {
    console.error("Missing phone number element or data");
    return;
  }
  phoneNumber.innerText = resumeData.contact.phoneNumber;

  if (!resumeData?.contact?.socials) {
    console.error("Missing socials data");
    return;
  }
  const socialsList = resumeData.contact.socials;

  if (!socialsList) {
    console.error("Missing socials list data");
    return;
  }
  socialsList.forEach((socialMedia) => {
    const socialsListItem = document.createElement("li");
    if (!socialsListItem) {
      console.error("Issue when creating socials list item element");
      return;
    }
    socialsListItem.className = "socials";

    const socialsIcon = document.createElement("img");
    if (!socialsIcon) {
      console.error("Issue when creating socials icon element");
      return;
    }

    if (!socialMedia?.icon) {
      console.error("Missing socials icon element");
      return;
    }
    socialsIcon.src = socialMedia.icon;

    if (!socialMedia?.alt) {
      console.error("Missing socials icon alt text");
      return;
    }
    socialsIcon.alt = socialMedia.alt;

    socialsIcon.className = "socials-icon";

    const socialsLink = document.createElement("a");
    if (!socialsLink) {
      console.error("Issue when creating socials link element");
      return;
    }

    if (!socialMedia?.link) {
      console.error("Missing socials link element");
      return;
    }
    socialsLink.href = socialMedia.link;

    if (!socialMedia?.id) {
      console.error("Missing socials link id");
      return;
    }
    socialsLink.id = socialMedia.id;

    if (!socialMedia?.text) {
      console.error("Missing socials link text");
      return;
    }
    socialsLink.innerText = socialMedia.text;

    socialsListItem.appendChild(socialsIcon);
    socialsListItem.appendChild(socialsLink);

    if (!socialsContainer) {
      console.error("Missing socials container element");
      return;
    }
    socialsContainer.appendChild(socialsListItem);
  });
}

export default displayContactInfo;
