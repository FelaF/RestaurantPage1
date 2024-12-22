import "./styles.css";
console.log(5)
const homeBtn = document.querySelector(".homeBtn")
const menuBtn = document.querySelector(".menuBtn")
const contactBtn = document.querySelector(".contactBtn")
import { MenuCreation } from "./menu";
import { ContactCreation } from "./contact";
import { contentContainer } from "./content";

menuBtn.addEventListener("click", ()=> {
    contentContainer.innerHTML = ``;
    console.log("Cheese")
    MenuCreation();
})

contactBtn.addEventListener("click", ()=> {
    contentContainer.innerHTML = ``;
    console.log("cheese")
    ContactCreation();
})
