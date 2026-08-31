// Stylesheet imports
import './css/styles.css';

// JS imports
import{loadHome} from "./js/home.js"
import{loadMenu} from "./js/menu.js"
import{loadAbout} from "./js/about.js"
const content = document.querySelector(".content")
const home = document.querySelector("#home")
const menu = document.querySelector("#menu")
const about = document.querySelector("#about")
loadHome()
home.addEventListener("click",()=>{
    content.innerHTML=""
    loadHome()
})

menu.addEventListener("click",()=>{
    content.innerHTML=""
    loadMenu()
})

about.addEventListener("click",()=>{
    content.innerHTML=""
    loadAbout()
})