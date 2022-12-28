// for loop to select all buttons
let numberofDrums = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberofDrums; i++) {
    // the EventListener listens when the button is click, when clicked it executes the function handleClick
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        let buttonHTML = this.innerHTML; 
        keySound(buttonHTML);
        buttonAnimation(buttonHTML);

    });
}

// the event listener to key pressed is added to the entire document
document.addEventListener("keydown", function(event){
    keySound(event.key);
    buttonAnimation(event.key);

});

// +++++++ functions ++++++++

function handleClick() { // function to pop alert when a button is clicked
    alert("I got clicked! ")
}

function playAudio() { // function to play the audio if the button is clicked
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}

// funcition for key pressed
function keyPressed() {
    alert("pressed key");    
}

function keySound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log();
            break;
    }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);

}