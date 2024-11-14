
export function loadMenu(){

  const content = document.querySelector("div#content");

  const mainDishesContainer = document.createElement("div");
  mainDishesContainer.className = "main-dishes";
  const sideDishesContainer = document.createElement("div");
  sideDishesContainer.className = "side-dishes";
  const drinksContainer = document.createElement("div");
  drinksContainer.className = "drinks";

  content.appendChild(mainDishesContainer);
  content.appendChild(sideDishesContainer);
  content.appendChild(drinksContainer);

  // add the contents of the menu
  let mainDishes = [];
  let sideDishes = [];
  let drinks = [];
}
