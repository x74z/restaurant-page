import pigeonEatingBread from "../assets/pigeon-eating-bread.jpg";

export function loadHome() {
  const createReview = (reviewAuthor, reviewText) => {
    const review = document.createElement("div");
    review.className = "review";
    const reviewsAuthor = document.createElement("h1");
    reviewsAuthor.innerText = reviewAuthor;
    const reviewContent = document.createElement("p");
    reviewContent.innerText = reviewText;

    // Everything gets inside a div(review) and then gets added to reviewContainer. This way i have a div inside
    // the reviews-container, so sizing with flexbox remains consistent
    // reviewAuthor && reviewContent   =>  .review  =>  .reviews  => .reviews-container
    const mainContainer = document.querySelector(".reviews-container");
    const reviewContainer = document.querySelector(".reviews");
    review.append(reviewsAuthor, reviewContent);
    reviewContainer.appendChild(review);
    mainContainer.appendChild(reviewsContainer);
  };
  const content = document.querySelector("div#content");
  const introduction = document.createElement("div");
  introduction.className = "introduction";
  const reviewsContentAndTitleContainer = document.createElement("div");
  reviewsContentAndTitleContainer.className = "reviews-container";

  content.append(introduction, reviewsContentAndTitleContainer);

  // Add the inside of introduction

  const title = document.createElement("h1");
  title.innerText = "The restaurant for PIGEONS";

  introduction.appendChild(title);

  const introText = document.createElement("p");
  introText.innerText =
    "Ever wanted to eat great food WITHOUT relying on humans? we got you covered! \nEnjoy a great meal with all of your fluffy friends!";
  introduction.appendChild(introText);
  // Add the title of reviews
  const reviewTitle = document.createElement("h1");
  reviewTitle.innerText = "Don't believe us? Read the reviews...";
  reviewsContentAndTitleContainer.appendChild(reviewTitle);
  // Add the div where every review will be

  const reviewsContainer = document.createElement("div");
  reviewsContainer.className = "reviews";
  reviewsContentAndTitleContainer.appendChild(reviewsContainer);
  // Add every review
  createReview("Donut", '"The food was marvelous!!"');
  createReview("Pam", '"The lentils were delicious!!"');
  createReview("Boepie", '"Loved every single thing!"');
  createReview("Everest", '"I am the chef, everyone loves my dishes"');

  // Add the image

  const image = document.createElement("img");
  image.src = pigeonEatingBread;
  content.appendChild(image);
}
