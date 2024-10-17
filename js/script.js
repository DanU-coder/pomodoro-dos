const buttons = document.querySelectorAll("button");

const btnSound = new Audio("./assets/sounds/btn-sound.mp3");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        btnSound.currentTime = 0;
        btnSound.play()
    })
})