
    const resetButton = document.querySelector("#reset-button")
    const team1Shots = document.querySelector("#teamone-shoot-button")
    const team2Shots = document.querySelector("#teamtwo-shoot-button")

    const numReset = document.querySelector("#num-resets")

    const team1goals = document.querySelector("#teamone-numgoals")
    const team2goals = document.querySelector("#teamtwo-numgoals")

    const TMNUMShots = document.querySelector ("#teamone-numshots")
    const TMNUMShots2 = document.querySelector ("#teamtwo-numshots")

    let TM1 = 0
    let TM2 = 0
   
    let TM1Goals = 0
    let TM2Goals = 0
    let TMBoth = 0
    
    resetButton.addEventListener("click",function(){
     
    numReset.innerHTML = TMBoth += 1
    TMNUMShots.innerHTML = TM1 = 0
    TMNUMShots2.innerHTML = TM2 = 0
    team2goals.innerHTML = TM2Goals = 0
    team1goals.innerHTML = TM1Goals = 0
    })

     team1Shots.addEventListener("click", function(){  
        TMNUMShots.innerHTML = TM1 += 1
        if (Math.random ()> 0.5 ){ 
            team1goals.innerHTML = TM1Goals += 2
   
        }
        console.log ("CLICK")
    })
    
    team2Shots.addEventListener("click", function(){  
        TMNUMShots2.innerHTML = TM2 += 1
        if (Math.random ()> 0.5 ){ 
        team2goals.innerHTML = TM2Goals += 2
    }
        console.log ("CLICK")
    })


  /*
    if (team1Shots === 10) {
    numReset = 0
    } else {
    result = TM1 += 1 
    }

    if (TM2 === 10) {result = TMBoth

         }       else {result = TM2 += 1 }   

     if (Math.random () < 0.75) {"What?"}
     


     

   // if () { alert = " TEAM 2 WOOW!" ; }
    //else { alert = "SORRY SUCKS!";}
        
    
   // Math.floor((Math.random() * 10) + 1)


     */
 
   

    

   
   

     even_or_odd_button = document.querySelector("#even_or_odd_button");
    even_or_odd_button.addEventListener("click", function () {
   
          })