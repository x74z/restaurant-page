// import imageName from "./path/to/image";
import "./styles.css";
import { loadHome } from "./initialpageload";
import { loadMenu} from "./loadmenu";
import { loadAbout} from "./loadabout";

loadHome();

function clearContent() {
  document.querySelector("#content").innerHTML = "";
}
// Add each button e.listener
document.querySelector("#home").addEventListener("pointerdown", () => {
  clearContent();
  loadHome();
});
document.querySelector("#menu").addEventListener("pointerdown", () => {
  clearContent();
  loadMenu();
});
document.querySelector("#about").addEventListener("pointerdown", () => {
  clearContent();
  loadAbout();
});
