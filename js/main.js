const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25    
    let now = new Date()    
    theDay = now.getDate() 
    console.log(theDay)
    let daysToGo = christmas - theDay    
    countdownDisplay.innerText = daysToGo    
}
 
renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
