const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let generateBtn = document.getElementById("generate-btn");
let password1El = document.getElementById("password");
let password2El = document.getElementById("password2");
let passwordLength = 15


function getRandomNumber() {

    let password = ""

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        password += characters[randomNumber];
    }

    return password;
}


function generatePassword() {
    password1El.textContent = getRandomNumber();
    password2El.textContent = getRandomNumber();

}


generateBtn.addEventListener("click", generatePassword);