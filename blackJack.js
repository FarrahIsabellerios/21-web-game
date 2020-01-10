
document.addEventListener("DOMContentLoaded", () => {

    let grid = document.querySelector("#grid")
    // let fold= document.querySelector("#fold")
 
let hit = document.querySelector("#hit")
let input = document.querySelector("input")
    
// let reStartButton = document.createElement("button")
            

    const getCards = async () => {
        try {
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1");
        let score = res.data.cards[0].value 
        let ul= document.createElement("ul")
        let li = document.createElement("li")
        let img = document.createElement("img")
        let points = document.querySelector("#points")      
        let empty = 0
                    res.data.cards.forEach((el)=>{                       
                        if (el){
                    if(score === "KING" || score === "QUEEN" || score === "JACK"){
                        empty = empty + 10
                    }  else if (11 > Number(score) > 0){
                        empty = empty + Number(score)
                    }   else if(score === "ACE"){
                        empty = empty + 11

                    } 
                        let total = document.querySelector("input").value
                            points.innerText = `Your Points:${ Number(total) + Number(empty)}`
                            input.value =  Number(total) + empty
                                    img.src = el.images.png
                                li.appendChild(img)
                                ul.appendChild(li)
                        grid.appendChild(ul)
                    
                               }
                        })
    
    
//     const folding = ()=>{     
//         let randomMessage = ["Congratulations, You win, Dealer Loses", "It's a Tie Between you and dealer", "You Lose, Dealer Wins!"] 
//         let random = randomMessage[Math.floor(Math.randomMessage() * randomMessage.length)];
//         let playAgain = document.createElement("h1")
//         playAgain.id = "playAgain"
//    playAgain.innerText = "Play Again"
//     document.querySelector("#game").id = "folded"
//     let folded = document.querySelector("#folded")
//  folded.innerText = `${random}`
//     let moves = document.querySelector("#moves")
//  document.body.removeChild(moves)      
//    document.body.appendChild(playAgain)
//    playAgain.addEventListener("click",(event)=>{
//      location.reload(event)
//      })
//     }

//    fold.addEventListener("click",folding)



                       const winGame = ( ) =>{  
                       
                        let startAgain = document.createElement("h1")
                                   startAgain.id = "startAgain"
                                startAgain.innerText = " Start Again"
                               let lose = document.querySelector("#game")
                               if (22 > input.value && input.value >16){
                                let moves = document.querySelector("#moves")
                                document.body.removeChild(moves) 
                                lose.innerText = "YAY You win, what a card shark!"
                             document.body.appendChild(startAgain)    
                            }
                            startAgain.addEventListener("click",(event)=>{
                                location.reload(event)
                              })
                                if (input.value>21){
                                let moves = document.querySelector("#moves")
                                document.body.removeChild(moves) 
                                lose.innerText = "You lose! Press start again for rematch"
                             document.body.appendChild(startAgain)                                                     
                              }
                              startAgain.addEventListener("click",(event)=>{
                                location.reload(event)
                              })                   
                      }
                        winGame()





        } catch(err) { console.log(err);  debugger;}                                                 
    }

  
//add eventlistener to a change to update score?




 hit.addEventListener("click",getCards)
   
      
})































