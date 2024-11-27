let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("theme-switch")

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
}

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

//--------------------------------------------------------------------

let generatePasswordButton = document.querySelector(".generate")
let password1 = document.querySelector(".password1")
let password2 = document.querySelector(".password2")
let password1Container = document.querySelector(".container-for-password1")
let password2Container = document.querySelector(".container-for-password2")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let mode = "Hacker"

let buttonNoob = document.getElementById("Noob")
let buttonPro = document.getElementById("Pro")
let buttonHacker = document.getElementById("Hacker")

buttonNoob.addEventListener("click", setModeToNoob)
buttonPro.addEventListener("click", setModeToPro)
buttonHacker.addEventListener("click", setModeToHacker)

function setModeToNoob() {
    mode = "Noob"
    currentMode.textContent = mode
    currentMode.id = "noobName"
}

function setModeToPro() {
    mode = "Pro"
    currentMode.textContent = mode
    currentMode.id = "proName"
}

function setModeToHacker() {
    mode = "Hacker"
    currentMode.textContent = mode
    currentMode.id = "hackerName"
}

function generateNoobPassword() {
    let password = ""
    let noobArray = characters.filter(char => (char >= "a" && char <= "z" || char >= "0" && char <= "9"))
    for (let i = 0; i < 15; i++) {
        let randomNumber = Math.floor((Math.random() * (noobArray.length)))
        password += noobArray[randomNumber]
    }
    return password
}

function generateProPassword() {
    let password = ""
    let proArray = characters.filter(char => (char >= "a" && char <= "z" || char >= "0" && char <= "9" || char >= "A" && char <= "Z"))
    for (let i = 0; i < 18; i++) {
        let randomNumber = Math.floor((Math.random() * (proArray.length)))
        password += proArray[randomNumber]
    }
    return password
}

function generateHackerPassword() {
    let password = ""
    for (let i = 0; i < 21; i++) {
        let randomNumber = Math.floor((Math.random() * (characters.length)))
        password += characters[randomNumber]
    }
    return password
}

function createCopyButton() {
    let copyButton = document.createElement("button");
    copyButton.classList.add("copy-button");
    copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"/></svg>`
    return copyButton
}

function displayPasswords() {
    
    if (mode === "Hacker") {
        password1.textContent = generateHackerPassword()
        password2.textContent = generateHackerPassword()
    } else if (mode === "Pro") {
        password1.textContent = generateProPassword()
        password2.textContent = generateProPassword()
    } else if (mode === "Noob") {
        password1.textContent = generateNoobPassword()
        password2.textContent = generateNoobPassword()
    }
    
    if (document.querySelector(".copy-button") === null) {
        password1Container.appendChild(createCopyButton())
        password2Container.appendChild(createCopyButton())
    }

    let copyButton1 = document.querySelector('.container-for-password1 .copy-button')
    let copyButton2 = document.querySelector('.container-for-password2 .copy-button')

    copyButton1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"/></svg>`
    copyButton2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"/></svg>`

    function copyText1() {
        let textToCopy = password1.textContent
        navigator.clipboard.writeText(textToCopy)
        copyButton1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>`
    }

    function copyText2() {
        let textToCopy = password2.textContent
        navigator.clipboard.writeText(textToCopy)
        copyButton2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>`
    }
    copyButton1.addEventListener("click", copyText1)
    copyButton2.addEventListener("click", copyText2)
}

generatePasswordButton.addEventListener("click", displayPasswords)

let currentMode = document.querySelector(".modeColor")
currentMode.textContent = mode
