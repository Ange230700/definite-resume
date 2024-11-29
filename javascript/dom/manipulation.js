// javascript\dom\manipulation.js

function getHtmlElement(selector) {
  return document.querySelector(selector);
}

function updateHtmlContent(element, content) {
  element.innerHTML += content;
}

export { getHtmlElement, updateHtmlContent };
