// import imageName from "./path/to/image";
import "./styles.css";
import pigeonEatingBread from "../assets/pigeon-eating-bread.jpg";


const image = document.createElement("img")
image.src = pigeonEatingBread;
console.log("works? yup");
document.querySelector("body").appendChild(image)
