
const btnLogin = document.getElementById("btnLogin")
console.log(btnLogin);
btnLogin.addEventListener("click", function(){

    // Ask user "Inserisci qui la tua nano-mail"
    const userMail = prompt("Inserisci qui la tua nano-mail");
    // Array mail white-list
    const whiteList = ["mammolo@gmail.com", "brontolo@gmail.com", "eolo@gmail.com", "pisolo@gmail.com", "dotto@gmail.com", "gongolo@gmail.com", "cucciolo@gmail.com", "biancaneve@gmail.com",];
    // Create isFound
    let isFound = false;
    // For EACH element
    for (let i = 0; i < whiteList.length; i++){
        const whiteMail = whiteList[i];
        console.log(whiteMail);
        // IF userMail = whiteMail[i]
        if (userMail === whiteMail) {
            isFound = true;
            console.log(isFound);
        }
        // isFound true
    
    }
    // Output
    // IF isFound
    // Succes login
    if (isFound) {
        alert("Sei un vero nano, puoi entrare")
    } else {
        alert("Non abbiamo un nano ma un imbroglione!")
    }

})
