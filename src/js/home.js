import img1 from "../img/farhan-shaikh-rVOIf6tc5DU-unsplash.jpg"
import img2 from "../img/mae-mu-kID9sxbJ3BQ-unsplash.jpg"
import img3 from "../img/saile-ilyas-T1AX0yT9dd4-unsplash.jpg"
import img4 from "../img/andy-chilton-0JFveX0c778-unsplash.jpg"
import img5 from "../img/conor-brown-H1uISjlRXJE-unsplash.jpg"
import img6 from "../img/debbie-widjaja-H_PXix_4Bwc-unsplash.jpg"
import img7 from "../img/diliara-garifullina-Kx3_xGEvBQU-unsplash.jpg"
import img8 from "../img/farhan-shaikh-rVOIf6tc5DU-unsplash.jpg"
import img9 from "../img/jan-antonin-kolar-e7EzJaMqvQY-unsplash.jpg"
function loadHome(){

    const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9]

    const content = document.querySelector(".content")
    const container1 = document.createElement("div")
    const container2 = document.createElement("div")

     const heading=document.createElement("h1")
     content.appendChild(heading)
     heading.textContent="WELCOME TO THE RUDIGER BAKE HOUSE"

     const paragraph = document.createElement("p")
     content.appendChild(paragraph)
     paragraph.textContent="TASTES THAT REMIND YOU OF HOME"
   
    
    container1.classList.add("container1")
    container2.classList.add("container2")

     
     
    content.appendChild(container1)
  

      images.forEach((item)=>{
        const div = document.createElement("div")
        const image = document.createElement("img")
        image.src =item
        div.appendChild(image)
        container1.appendChild(div)

      })
      
      
     

}

export{loadHome}