export function loadAbout() {
  const content = document.querySelector("div#content");
  const phoneNumberContainer = document.createElement("div");
  phoneNumberContainer.className = "phone-container";
  const emailContainer = document.createElement("div");
  emailContainer.className = "email-container";
  const locationContainer1 = document.createElement("div");
  locationContainer1.className = "location-container";
  const locationContainer2 = document.createElement("div");
  locationContainer2.className = "location-container";
  content.append(
    phoneNumberContainer,
    emailContainer,
    locationContainer1,
    locationContainer2,
  );
  function addElement(elementContainer, elementTitle, elementContent) {
    const title = document.createElement("h1");
    title.innerText = elementTitle;
    const content = document.createElement("p");
    content.innerText = elementContent;
    elementContainer.appendChild(title, content);
  }
  // addElement(phoneNumberContainer)
}
