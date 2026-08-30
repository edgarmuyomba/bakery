import img1 from "../img/jan-antonin-kolar-e7EzJaMqvQY-unsplash.jpg"
import img2 from "../img/mae-mu-8GzmzEyLNyc-unsplash (1).jpg"
import img3 from "../img/s-o-c-i-a-l-c-u-t-Ia3RJhdoGxA-unsplash.jpg"
/*import img4 from "../img/"
import img5 from "../img/"*/
function loadMenu(){

    const content = document.querySelector(".content")

    const contentM = document.createElement("div")
    const container_m1 = document.createElement("div")
    const container_m2 = document.createElement("div")
    const container_m3 = document.createElement("div")

    contentM.classList.add("menu")

    content.appendChild(contentM)
    contentM.appendChild(container_m1)
    contentM.appendChild(container_m2)
    contentM.appendChild(container_m3)
    
    const cookies =[
        {
             name:"Chocolate Chip",
            price:"UGX:5,000 "
    },
      {
             name:"Chocolate Chunk",
            price:"UGX:10,000"
    },
      {
             name:"White Chocolate",
            price:"UGX:8,000"
    },
      {
             name:"Peanut Butter",
            price:"UGX:5,000"
    },
      {
             name:"Almond Joy ",
            price:"UGX:12,000"
    }
     ]

     /*function Bread(name,price){
        this.name = name
        this.price=price
     }*/
    const breads = [
          {
             name:"Fresh Sourdough",
            price:"UGX:5,000"
    },
      {
             name:"Crusty Baguette",
            price:"UGX:24,000"
    },
      {
             name:"Buttery Brioche",
            price:"UGX:20,000"
    },
      {
             name:"Rustic Ciabatta",
            price:"UGX:14,000"
    },
      {
             name:"Cheddar Jalapeno",
            price:"UGX:30,000"
    },
    ]

    const pastries =[
          {
             name:"Classic Croissant",
            price:"UGX:6,500"
    },
      {
             name:"Apple Danish",
            price:"UGX:10,000"
    },
      {
             name:"Chocolate Swirl",
            price:"UGX:15,000"
    },
      {
             name:"Raspberry twist",
            price:"UGX:15,000"
    },
    ]

    cookies.forEach((item)=>{
        const cookieMenu = document.createElement("div")
        container_m1.appendChild(cookieMenu)
        cookieMenu.textContent=`${item.name}--- ${item.price}`
    })

    breads.forEach((item)=>{
        const breadMenu = document.createElement("div")
        container_m2.appendChild(breadMenu)
        breadMenu.textContent=`${item.name}--- ${item.price}`
    })
     
    pastries.forEach((item)=>{
        const pastriesMenu = document.createElement("div")
        container_m3.appendChild(pastriesMenu)
        pastriesMenu.textContent=`${item.name}--- ${item.price}`
    })
}
export{loadMenu}