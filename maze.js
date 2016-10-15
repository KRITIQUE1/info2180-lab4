
window.onload= function() {
    var booundary = document.getElementsByClassName("boundary");
    var winner = true;
    var end = document.getElementById("end");
    var restart = document.getElementById("start");
    
    for (var i = 0; i < booundary.length-1; i++){
     booundary[i].addEventListener("mouseover",function(){
        for (var j = 0 ; j < booundary.length-1; j++){
        booundary[j].className += " youlose"; 
        winner=false;
         }
         
    });
    }
    end.addEventListener("mouseover",function(){
        if (winner == false){
            alert("Sorry, But you lose!");
            document.getElementById("status").innerHTML = "Sorry, You Lose";
        }
        else if (winner == true){
            alert("ERMMMAH GOD You won!");
             document.getElementById("status").innerHTML = "Wow, You Won";
        }
    });
    
    restart.addEventListener("click", function(){
        for(var y = 0; y < (booundary.length-1); y++){
            for(var z = 0; 0 < (booundary.length-1);z++){
                winner = true;
                booundary[z].className += "boundary";
            }
        }
         document.getElementById("status").innerHTML = "Move to S to begin";
    });

    
 };
    
    


