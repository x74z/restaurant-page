export function loadAbout() {
  const content = document.querySelector("div#content");
  // Every div that will appear
  const phoneNumberContainer = document.createElement("div");
  phoneNumberContainer.className = "phone-container about-container";
  const emailContainer = document.createElement("div");
  emailContainer.className = "email-container about-container";
  const locationContainer1 = document.createElement("div");
  locationContainer1.className = "location-container about-container";
  const locationContainer2 = document.createElement("div");
  locationContainer2.className = "location-container about-container";
  content.append(
    phoneNumberContainer,
    emailContainer,
    locationContainer1,
    locationContainer2,
  );
  // Function to add the element title and text to its container
  function addElement(elementContainer, elementTitle, elementContent) {
    const title = document.createElement("h1");
    title.innerText = elementTitle;
    const content = document.createElement("p");
    content.innerText = elementContent;
    elementContainer.append(title, content);
  }
  addElement(phoneNumberContainer, "Wanna call us for a delivery?", "999 99 99 69")
  addElement(emailContainer, "Feeling too shy for a call?\nEmail us, and we'll bring your food!", "thepigeonrestaurant.deliveries@pigeon.mail")
  addElement(locationContainer1, "This is one of our locations", "Pidgey Street 21")
  addElement(locationContainer2, "This is another one of our locations", "Foxy Street 21")
}
