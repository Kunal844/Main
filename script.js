
var timer=60
var score=0
var hitrn=0



function makeBubble(){
    var clutter=""
for(var i=1;i<=133;i++){
    var rn=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`
}
document.querySelector(".mid").innerHTML=clutter
}
//for running timer
function runtimer(){
    var timerinterval=setInterval(function(){
        if(timer>0){
            timer --
        document.querySelector("#timerval").textContent=timer
        }else{
            clearInterval(timerinterval)
            document.querySelector(".mid").innerHTML=`<h1>Your Total Score is ${score}</h1>`
        }
        
    },1000)
   
}
//to get new hit value every time the page loads
function getnewhit(){
     hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitval").innerHTML=hitrn   
}
//to increase score 
function increaseScore(){
    score+=10
    document.querySelector("#scoreval").innerHTML=score
}
//event bubbling
document.querySelector(".mid").addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);//to get the text value , dets was retrning div
    //number funct used to convert the string returned by textcontext to integer
    if (clickednum==hitrn)
        increaseScore()
    makeBubble()
    getnewhit()
    
})



makeBubble()
runtimer()
getnewhit()







