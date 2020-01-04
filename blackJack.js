document.addEventListener("DOMContentLoaded",()=>{
// let button = document.createElement("button")
// button.innerText = "Draw Card"
// document.body.appendChild(button)
// let divLeft = document.createElement("div")
// let divRight = document.createElement("div")


    const getCards = async () => {
        try {
            let res = await axios.get("https://deckofcardsapi.com/api/deck/dct9y7o6wtke/draw/?count=2");

let cardData = Object.values(res)[0].cards

cardData.forEach(el => {
let selectImages =   el.image
let img = document.createElement("img")
img.src = selectImages
document.body.appendChild(img)
})
} catch(err) {
    console.log(err);
    debugger
    
}
}

getCards()
})







