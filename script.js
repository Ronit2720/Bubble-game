var timer = 3;
var score = 0;
var hitrn = 0;
function incScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

    for(var i=0; i<=157; i++){
        var rn=Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer(){
    var timercount = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timercount);
            document.querySelector("#pbtm").innerHTML = `<h1 id="end">GAME OVER</h1>`;
        }
    },1000)
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum == hitrn){
        incScore();
        makeBubble();
        getNewHit();
    }
})


getNewHit();
runTimer();
makeBubble();
 