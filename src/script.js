// Stylesheet imports
import './css/styles.css';

// JS imports
import{loadHome} from "./js/home.js"
import{loadMenu} from "./js/menu.js"
const content = document.querySelector(".content")
const home = document.querySelector("#home")
const menu = document.querySelector("#menu")
const contact = document.querySelector("#contact")
loadHome()
home.addEventListener("click",()=>{
    content.innerHTML=""
    loadHome()
})

menu.addEventListener("click",()=>{
    content.innerHTML=""
    loadMenu()
})