var drums = document.querySelectorAll(".drum").length;

for(var i=0; i<drums; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function
        doit(){
                var z = this.innerText;
                drumPress(z);
                drumAnimation(z);
                
        });
}

document.addEventListener("keydown", function(event){
    drumPress(event.key);
    drumAnimation(event.key);
    
})



function drumPress(z){
    if(z === "w"){
        var audio = new Audio("../sounds/crash.mp3");
         audio.play();
    }
    else if(z === "a"){
        var audio = new Audio("../sounds/kick-bass.mp3");
         audio.play();
    }
    else if(z === "s"){
        var audio = new Audio("../sounds/snare.mp3");
         audio.play();
    }
    else if(z === "d"){
        var audio = new Audio("../sounds/tom-1.mp3");
         audio.play();
    }
    else if(z === "j"){
        var audio = new Audio("../sounds/tom-2.mp3");
         audio.play();
    }
    else if(z === "k"){
        var audio = new Audio("../sounds/tom-3.mp3");
         audio.play();
    }
    else if(z === "l"){
        var audio = new Audio("../sounds/tom-4.mp3");
         audio.play();
    }
}

function drumAnimation(z){
        var activeButton = document.querySelector("." + z);
        console.log(z);
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
}

// var audio = new Audio("/sounds/crash.mp3");
//                 audio.play();