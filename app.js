//happy button

document.getElementById("happy").onclick =function(){
   
    document.body.style.backgroundColor="lightyellow";
    document.getElementById("mood").innerText="😊 I Am Happy!";
    document.getElementById("message").innerText="Today is a beautiful day!";
}

//calm button

document.getElementById("calm").onclick =function(){
   
    document.body.style.backgroundColor="lightblue";
    document.getElementById("mood").innerText="😌 I Am Calm!";
    document.getElementById("message").innerText="I feel peaceful and relaxed.";
}


//excited button

document.getElementById("excited").onclick =function(){
   
    document.body.style.backgroundColor="pink";
    document.getElementById("mood").innerText="🤩 I Am Excited!";
    document.getElementById("message").innerText="Let's do something amazing!";
}

//reset button

document.getElementById("reset").onclick=function(){
   window.location.reload(); 
}