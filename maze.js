

window.onload= function() {
    var booundary = document.getElementsByClassName("boundary");
    var winner = true;
    var end = document.getElementById("end");
    
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
        }
        else if (winner == true){
            alert("ERMMMAH GOD You won!");
        }
    });
    

    
 };
    
    


