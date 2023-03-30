let bought;
    function buyFunction() {
        if(document.getElementById("buy1")){
            bought = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            console.log("hej1");
        }
        else if(document.getElementById("buy2")){
            bought = "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        }
        else if(document.getElementById("buy3")){
            bought = "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        }
        else if(document.getElementById("buy4")){
            bought = "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
            console.log("hej4");
        }
        
        }
        
    function displayImage() {
        document.body.append(bought);
    
       }