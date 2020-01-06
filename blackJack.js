document.addEventListener("DOMContentLoaded",()=>{

let button = document.createElement("button")

const getGame = async () => {
    try {
        let res =  await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1");
     debugger;
       let getCards = res.data.cards
        debugger;
  
     debugger
        getCards.forEach(el => {
           
    let card = document.createElement("div")
    let button = document.querySelector("button")
    button.innerText = el.value
    let img = document.createElement("img")
    img.src = el.image;
    let h2 = document.createElement("h2")
    h2.innerText = ""
        if(el.value === "QUEEN" || "KING" || "JACK" ){
            let h2 = document.querySelector
            h2.innerText = 10 
        }else if( parseInt(el.value)<= 10){
            let h2 = document.querySelector("h2")
            h2.innerText = parseInt(el.value)
  }
    card.appendChild(h2)
    card.appendChild(img)
    document.body.appendChild(card)
    document.body.appendChild(button)
        })
    } catch(err) {
        console.log(err);
        debugger    
    }
}
getGame()
button.addEventListener("click",()=>{
    getGame()
})



})


















