let bought;
function buyFunction(clickedValue) {
    bought=clickedValue;
   console.log(clickedValue);
   console.log(bought);
   var p = document.getElementById("val"); 
   if(clickedValue==1){
   p.innerHTML = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
}else if(clickedValue==2){
    p.innerHTML = "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
}else if(clickedValue==3){
    p.innerHTML = "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
}else if(clickedValue==4){
    p.innerHTML = "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
   
}
   
}

    
        
    function displayImage() {
        
    
    }