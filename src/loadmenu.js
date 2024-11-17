// Menu iife
const menu = (() => {
  let mainDishes = [];
  let sideDishes = [];
  let drinks = [];

  const addToDOM = (type, menuItem) => {
    // Select all of the containers, to add the children later
    const mainDishesContainer = document.querySelector(".main-dishes");
    const sideDishesContainer = document.querySelector(".side-dishes");
    const drinksContainer = document.querySelector(".drinks");
    // The things that will be added
    const itemContainer = document.createElement("div");
    itemContainer.className = "menu-item";
    const name = document.createElement("h1");
    name.innerText = menuItem.name;
    const description = document.createElement("p");
    description.innerText = menuItem.description;
    const price = document.createElement("h2");
    price.innerText = menuItem.price;
    // Function to add each thing to its container
    function addEachNode(menuContainer) {
      itemContainer.append(name, description, price);
      // Add the div to its parent
      menuContainer.appendChild(itemContainer);
    }
    // add the children to the corresponding container
    switch (type) {
      case "main":
        addEachNode(mainDishesContainer);
        break;
      case "side":
        addEachNode(sideDishesContainer);
        break;
      case "drinks":
        addEachNode(drinksContainer);
        break;

      default:
        console.error("Not a valid type");
        break;
    }
  };
  const addMenuObject = (name, description, price, type) => {
    const menuItem = { name: name, description: description, price: price };
    function addItem(menuArray) {
      menuArray.push(menuItem);
      addToDOM(type, menuItem);
    }
    switch (type) {
      case "main":
        addItem(mainDishes);
        break;
      case "side":
        addItem(sideDishes);
        break;
      case "drinks":
      case "drink":
        addItem(drinks);
        break;

      default:
        console.error("Not a valid type");
        break;
    }
  };
  const addMainDish = (name, description, price) => {
    addMenuObject(name, description, price, "main");
  };
  const addSideDish = (name, description, price) => {
    addMenuObject(name, description, price, "side");
  };
  const addDrink = (name, description, price) => {
    addMenuObject(name, description, price, "drinks");
  };

  return { addMainDish, addSideDish, addDrink, mainDishes, sideDishes, drinks };
})();
export function loadMenu() {
  const content = document.querySelector("div#content");

  const mainDishesContainer = document.createElement("div");
  mainDishesContainer.className = "main-dishes menu";
  const sideDishesContainer = document.createElement("div");
  sideDishesContainer.className = "side-dishes menu";
  const drinksContainer = document.createElement("div");
  drinksContainer.className = "drinks menu";
  // Add the title of each div
  const mainDishesTitle = document.createElement("h1");
  mainDishesTitle.innerText = "Main Dishes";
  mainDishesContainer.appendChild(mainDishesTitle);
  const sideDishesTitle = document.createElement("h1");
  sideDishesTitle.innerText = "Side Dishes";
  sideDishesContainer.appendChild(sideDishesTitle);
  const drinksTitle = document.createElement("h1");
  drinksTitle.innerText = "Drinks";
  drinksContainer.appendChild(drinksTitle);

  content.append(mainDishesContainer, sideDishesContainer, drinksContainer);

  // add the contents of the menu
  menu.addMainDish("Bowl of seeds", "Very yummy", "5€");
  menu.addMainDish("Bread", "Cut with expertise by our chef", "8€");
  menu.addMainDish("Wormy Surprise (Vegan!)", "A heaping bowl of premium corn kernels, hand-picked for maximum crunch.", "6€")
  menu.addMainDish("Deluxe Birdfeeder Platter", "An assortment of seeds, nuts, and dried fruits. Perfect for sharing!", "12€")

  menu.addSideDish("Lentis", "Our chef's favorite dish, enjoy freshly picked up lentils.", "2€");
  menu.addSideDish("Featherweight French Fries", "Crispy and light french fries.", "3€")
  menu.addSideDish("Popcorn", "Miniature popped grains, lightly salted. for that crunch.", "2€")

  menu.addDrink("Sky Juice (a.k.a. Rainwater)", "Pure and refreshing, harvested straight from the clouds.", "0,7€");
  menu.addDrink("Beak Bubble Tea", "Tiny bubbles in a seed-flavored infusion, served in a shallow bowl.", "2.2€");
  menu.addDrink("Nest Milkshake", "A creamy blend of oats and almond milk, garnished with a hint of honey.", "3€");

}
