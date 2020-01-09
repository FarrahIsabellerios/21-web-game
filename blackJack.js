
document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button")
    const getCards = async () => {
        try {
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1");
        
            res.data.cards.forEach((el)=>{
                let ul= document.createElement("ul")
                let li = document.createElement("li")
                let img = document.createElement("img")
                img.src = el.images.png
               li.appendChild(img)
               ul.appendChild(li)
        document.body.appendChild(ul)
            })
        } catch(err) { console.log(err);  debugger;}                                                 
    }
   

    button.addEventListener("click",getCards)
})































