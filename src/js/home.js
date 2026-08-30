import img1 from "../img/farhan-shaikh-rVOIf6tc5DU-unsplash.jpg"
import img2 from "../img/mae-mu-kID9sxbJ3BQ-unsplash.jpg"
import img3 from "../img/saile-ilyas-T1AX0yT9dd4-unsplash.jpg"
function loadHome(){
    const content = document.querySelector(".content")
    const container1 = document.createElement("div")
    const container2 = document.createElement("div")

     
   
    
    container1.classList.add("container1")
    container2.classList.add("container2")

     const div1 = document.createElement("div")
     const div2 = document.createElement("div")
     const div3 = document.createElement("div")
     /*
    const div4 = document.createElement("div")
     const div5 = document.createElement("div")
     const div6 = document.createElement("div")
*/
    content.appendChild(container1)
    content.appendChild(container2)
     container1.appendChild(div1)
      container1.appendChild(div2)
      container1.appendChild(div3)
      
      /*
      content.appendChild(div4)
      content.appendChild(div5)
      content.appendChild(div6)
*/
      const image1 = document.createElement("img")
      image1.src =img1
      image1.alt ="cookies"
      div1.appendChild(image1)

      const image2 = document.createElement("img")
      image2.src =img2
      image2.alt ="cookies"
      div2.appendChild(image2)

      const image3 = document.createElement("img")
      image3.src =img3
      image3.alt ="cookies"
      div3.appendChild(image3)
      
      
     

}

export{loadHome}