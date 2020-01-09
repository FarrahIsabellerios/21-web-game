
document.addEventListener("DOMContentLoaded", () => {
 
    let start= document.querySelector("#start")
    const getCards = async () => {
        try {
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1");
        let score = res.data.cards[0].value 
        let ul= document.createElement("ul")

        let li = document.createElement("li")
     
        let img = document.createElement("img")
        let grid = document.querySelector("#grid")
  
      

  

     
 
      

        // let input = document.querySelector("input")
        // let empty = 0
        //   if(score === "KING" || score === "QUEEN" || score === "JACK"){
        //       empty = empty + 10
        //   }  else if (11 > Number(score) > 0){
        //       empty = Number(score)
        //   }   else if(score === "ACE"){
        //     empty = empty + 1

        //   } 

        res.data.cards.forEach((el)=>{
                    // total = 0
            if (el){
        let points = document.querySelector("#points")   
        let input = document.querySelector("input")
        let empty = 0
          if(score === "KING" || score === "QUEEN" || score === "JACK"){
              empty = empty + 10
          }  else if (11 > Number(score) > 0){
              empty = empty + Number(score)
          }   else if(score === "ACE"){
            empty = empty + 11

          } 


        //   array.reduce(function(a, b){
        //     return a + b;
        // }, 0);
              let total = document.querySelector("input").value
                points.innerText = `Your Points:${ Number(total) + Number(empty)}`
                   input.value =  Number(total) + empty
                        img.src = el.images.png
                       li.appendChild(img)
                       ul.appendChild(li)
               grid.appendChild(ul)
            


                    }
            })
        } catch(err) { console.log(err);  debugger;}                                                 
    }

  
//add eventlistener to a change to update score?


    start.addEventListener("click",getCards)
      
})































