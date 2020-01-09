
document.addEventListener("DOMContentLoaded", () => {
    let start= document.querySelector("#start")
    const getCards = async () => {
        try {
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1");
                res.data.cards.forEach((el)=>{
                let ul= document.createElement("ul")
                let li = document.createElement("li")
                let img = document.createElement("img")
                let grid = document.querySelector("#grid")
                img.src = el.images.png
               li.appendChild(img)
               ul.appendChild(li)
       grid.appendChild(ul)
            })
        } catch(err) { console.log(err);  debugger;}                                                 
    }
   
    const scoreKeeper = async ()=>{
try{

let res = await axios.get("url")


    
}catch(err){
    console.log(err)
    debugger;
}







    }






    start.addEventListener("click",getCards)
})































