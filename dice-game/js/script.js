// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
const userBox = document.getElementById("scoreUser");
const iaBox = document.getElementById("scoreIA");
const btn = document.getElementById("btnPlay")
console.log(btnPlay);

// on click
btn.addEventListener("click", function(){
    // Generate 2 random numbers from 1 to 6
    const userNumber = Math.floor(Math.random() * 6) + 1;
    const iaNumber = Math.floor(Math.random() * 6) + 1;
    console.log(userNumber);
    console.log(iaNumber);
    
    
    // IF userNumber > iaNumber
        // add class "ms_winner" to userBox
        // remove class "ms_winner to iaBox"
    // ELSE IF iaNumber > userNumber
        // add class "ms_winner to iaBox"
        // remove class "ms_winner" to userBox

    if (userNumber > iaNumber) {
        userBox.classList.add("ms_winner")
        iaBox.classList.remove("ms_winner")
    } else if (iaNumber > userNumber) {
        iaBox.classList.add("ms_winner")
        userBox.classList.remove("ms_winner")
    } else {
        iaBox.classList.remove("ms_winner")
        userBox.classList.remove("ms_winner")
    }
    
    // Output
    userNumber.innerHTML = `${userNumber}`;
    userBox.innerHTML = userNumber;
    
    iaNumber.innerHTML = `${iaNumber}`;
    iaBox.innerHTML = iaNumber;

})
