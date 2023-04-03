var _img = document.getElementById('product');
var newImg = new Image;
newImg.onload = function() {
    _img.src = this.src;
}
//newImg.src = 'http://whatever'    
        
    var q = localStorage.getItem("chosen");
        console.log(localStorage.getItem("chosen"));
    
        if(q==1){
            newImg.src = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
         }else if(q==2){
            newImg.src = "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
         }else if(q==3){
            newImg.src = "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
         }else if(q==4){
            newImg.src = "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
            
         }

console.log(localStorage.getItem("namnet"))
         const recieve1 = document.getElementById("recieve1");
         const recieve2 = document.getElementById("recieve2");
         const recieve3 = document.getElementById("recieve3");
         const recieve4 = document.getElementById("recieve4");
         const recieve5 = document.getElementById("recieve5");
         const recieve6 = document.getElementById("recieve6");
         recieve1.appendChild(document.createTextNode(localStorage.getItem("namnet")));
         recieve2.appendChild(document.createTextNode(`${localStorage.getItem("emailet")}`));
         recieve3.appendChild(document.createTextNode(`${localStorage.getItem("numret")}`));
         recieve4.appendChild(document.createTextNode(`${localStorage.getItem("adressen")}`));
         recieve5.appendChild(document.createTextNode(`${localStorage.getItem("postnumret")}`));
         recieve6.appendChild(document.createTextNode(`${localStorage.getItem("orten")}`));
         console.log(localStorage.getItem("namnet"))

