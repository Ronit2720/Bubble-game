function makeBubble(){
    var clutter = "";

    for(var i=0; i<=157; i++){
        var rn=Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML=clutter;
}

var timer=60;
function runTimer(){
    setInterval(function(){
        timer--;
        document.querySelector("#timerval").textContent=timer;
    },1000)
}


runTimer();
makeBubble();
