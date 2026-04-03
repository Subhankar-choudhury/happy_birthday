window.addEventListener("load", function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

startTypewriter();

},3000);

});


/* TYPEWRITER */

function startTypewriter(){

const text = "Happy Birthday Sarayu 🎂";

let index = 0;

function type(){

if(index < text.length){

document.getElementById("typewriter").innerHTML += text.charAt(index);

index++;

setTimeout(type,80);

}

}

type();

}


/* CELEBRATE BUTTON */

function celebrate(){

let music = document.getElementById("song");

music.play().catch(function(e){
console.log("Audio blocked:",e);
});

document.getElementById("cakeReveal").classList.remove("hidden");

confetti({
particleCount:200,
spread:100,
origin:{y:0.6}
});

}


/* SURPRISE BUTTON */

function startSurprise(){

document.getElementById("image1").classList.remove("hidden");

confetti({
particleCount:200,
spread:90,
origin:{y:0.6}
});


setTimeout(function(){

document.getElementById("birthdayReveal").classList.remove("hidden");

confetti({
particleCount:300,
spread:120,
origin:{y:0.6}
});

},4000);

}