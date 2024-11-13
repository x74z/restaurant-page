import pigeonEatingBread from "../assets/pigeon-eating-bread.jpg";

export function loadMenu() {
  const createReview = (reviewAuthor, reviewText) => {
    const review = document.createElement("div");
    review.className = "reviews";
    const reviewsTitle = document.createElement("h1");
    reviewsTitle.innerText = reviewAuthor;
    const reviewContent = document.createElement("p");
    reviewContent.innerText = reviewText;

    // Add the p and h1 to review, and review to reviews-container
    review.appendChild(reviewsTitle);
    review.appendChild(reviewContent);
    const container = document.querySelector(".reviews-container");
    container.appendChild(review);
  };
  const content = document.querySelector("div#content");
  const introduction = document.createElement("div");
  introduction.className = "introduction";
  const reviewsContainer = document.createElement("div");
  reviewsContainer.className = "reviews-container";

  content.appendChild(introduction);
  content.appendChild(reviewsContainer);

  // Add the inside of introduction

  const title = document.createElement("h1");
  title.innerText = "The restaurant for PIGEONS";

  introduction.appendChild(title);

  const introText = document.createElement("p");
  introText.innerText =
    "Ever wanter to eat great food WITHOUT relying on humans? we got you covered \nEnjoy a great meal with all of your fluffy friends!";
  introduction.appendChild(introText);
  // Add the title of reviews
  const reviewTitle = document.createElement("h1");
  reviewTitle.innerText = "Read the reviews...";
  reviewsContainer.appendChild(reviewTitle);

  // Add every review
  createReview("Donut", '"The food was marvelous!!"');
  createReview("Pam", '"The lentils were delicious!!"');
  createReview("Boepie", '"Loved every single thing!"');

  // Add the image

  const image = document.createElement("img");
  image.src = pigeonEatingBread;
  content.appendChild(image);
}
