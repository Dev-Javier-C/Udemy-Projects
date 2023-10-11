let count = 0;
let arrColor = ["green", "red", "yellow", "blue"];
let pattern = [];
let userPattern = [];
started = false;
function btnSound(btnColor){
    const sound = new Audio("/sounds/"+btnColor+".mp3");
    sound.play();
}
function randomNum(){
    return Math.floor(Math.random() * 4);
}
function randomColor(){
    return arrColor[randomNum()];
}
function clickAnimate(color){
    $("#"+color).animate({opacity:0.5},100);
    setTimeout(function(){
        $("#"+color).animate({opacity:1},100)
    },100);
}
function nextSequence(){
    userPattern = [];
    let temp = randomColor();
    console.log(temp)
    pattern.push(temp);
    btnSound(temp);
    clickAnimate(temp);
    count++;
    $("#level-title").text("Level "+ count);
}
function startOver(){
    count = 0;
    pattern = [];
    started = false;
}
function checkAnswer(currentLevel){
    if(userPattern[currentLevel] === pattern[currentLevel]){
        console.log(true);
        console.log(userPattern + "   " + pattern)
        if(userPattern.toString() === pattern.toString()){
            console.log("True");
            setTimeout(function(){
                nextSequence();
            },1000)
            
        }
    }
    else{
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 200)
        $("#level-title").text("Game Over, Press Any Key to Restart")
        startOver();
        console.log(userPattern)
        console.log(pattern)
    }
}

$(document).keypress(function(){ 
    if(!started){
        $("#level-title").text("Level " + count);
        nextSequence();
        started = true;
    }
    //console.log(pattern)   
    
});

$(".btn").click(function(){
    let temp = $(this).attr("id")
    clickAnimate(temp);
    btnSound(temp);
    userPattern.push(temp);     
    checkAnswer(userPattern.length - 1);   
})