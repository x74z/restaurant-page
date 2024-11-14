// import imageName from "./path/to/image";
import "./styles.css";
import { loadHome } from "./initialpageload";
// import { loadMenu} from "./initialpageload";
// import { loadAbout} from "./initialpageload";

loadHome();

function clearContent() {
  document.querySelector("#content").innerHTML = "";
}
// Add each button e.listener
document.querySelector("#home").addEventListener("pointerdown", () => {
  clearContent();
  loadHome;
});
document.querySelector("#menu").addEventListener("pointerdown", () => {
  clearContent();
});
document.querySelector("#about").addEventListener("pointerdown", () => {
  clearContent();
});
