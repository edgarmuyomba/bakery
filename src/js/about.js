function loadAbout(){
    const content = document.querySelector(".content")

    const heading = document.createElement("h1")
    heading.textContent="Visit Us"
    content.appendChild(heading)

const bakeryDetails = ["Wandegeya","Monday to Saturday","9am - 7pm","07xxxxxxxx"]
bakeryDetails.forEach((item)=>{
    const containerA = document.createElement('div')
    const paragraph = document.createElement("p")
    containerA.appendChild(paragraph)
    content.appendChild(containerA)
    paragraph.textContent=item
})

}
export{loadAbout}