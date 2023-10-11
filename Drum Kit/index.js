function audioPlay(keyPress){
    switch (keyPress){
        case "w": 
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case "a": 
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
        case "s": 
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;    
        case "d": 
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
        case "j": 
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case "k": 
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        case "l": 
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        default:
            
    }
}
function btnClick(){
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    let key = this.textContent;
    audioPlay(key);
    btnAnimation(key)
    
    
}
for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", btnClick);
}

document.addEventListener("keydown", (event) => {
    let key = event.key;
    audioPlay(key);
    btnAnimation(key)
});

function btnAnimation(currentKey){
    let key = "."+currentKey;
    let btn = document.querySelector(key);
    btn.classList.add("pressed")
    setTimeout(function(){
        btn.classList.remove("pressed")
    },100);
}
