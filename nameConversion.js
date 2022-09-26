const convertBtn = document.querySelector("#convert-btn");
const text = document.querySelector("#text");
const caseDivs = document.querySelectorAll(".case_div");

function conversion(convertBtn, text, caseDivs) {
  convertBtn.addEventListener("click", () => {
    caseDivs.forEach((caseDiv) => {
      caseDivId = caseDiv.children[1].id;
      document.getElementById(caseDivId).innerText = "";
      coverter(caseDiv, text.value);
    });
  });
}

function coverter(caseDiv, text) {
  caseDivId = caseDiv.children[1].id;
  switch (caseDivId) {
    case "camel-case":
      let camelText = toCamelCase(text);
      let textNode1 = document.createTextNode(camelText);
      document.getElementById(caseDivId).append(textNode1);
      break;
    case "pascal-case":
      let pascalText = toPascalCase(text);
      let textNode2 = document.createTextNode(pascalText);
      document.getElementById(caseDivId).append(textNode2);
      break;
    case "snake-case":
      let snakeText = toSnakeCase(text);
      let textNode3 = document.createTextNode(snakeText);
      document.getElementById(caseDivId).append(textNode3);
      break;
    case "screaming-snake-case":
      let screamingSnakeText = toScreamingSnakeCase(text);
      let textNode4 = document.createTextNode(screamingSnakeText);
      document.getElementById(caseDivId).append(textNode4);
      break;
    case "kebab-case":
      let kebabText = toKebabCase(text);
      let textNode5 = document.createTextNode(kebabText);
      document.getElementById(caseDivId).append(textNode5);
      break;
    case "screaming-kebab-case":
      let screamingKebabText = toScreamingKebabCase(text);
      let textNode6 = document.createTextNode(screamingKebabText);
      document.getElementById(caseDivId).append(textNode6);
      break;
    default:
      break;
  }
}

function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((data, i) => {
      return i === 0 ? data : data.charAt(0).toUpperCase() + data.slice(1);
    })
    .join("");
}

function toPascalCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((data) => {
      return data.charAt(0).toUpperCase() + data.slice(1);
    })
    .join("");
}

function toSnakeCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((data) => {
      return data;
    })
    .join("_");
}

function toScreamingSnakeCase(str) {
  return str
    .toUpperCase()
    .split(" ")
    .map((data) => {
      return data;
    })
    .join("_");
}

function toKebabCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((data) => {
      return data;
    })
    .join("-");
}

function toScreamingKebabCase(str) {
  return str
    .toUpperCase()
    .split(" ")
    .map((data) => {
      return data;
    })
    .join("-");
}
conversion(convertBtn, text, caseDivs);
