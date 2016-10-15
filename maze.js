
window.onload= function() {
    var booundary = document.getElementsByClassName("boundary");
    
    for (var i = 0; i < booundary.length-1; i++){
     booundary[i].addEventListener("mouseover",function(){
         for (var j = 0 ; j < booundary.length-1; j++){
        booundary[j].className += " youlose"; 
         }
    });
    }
 };
    
    

