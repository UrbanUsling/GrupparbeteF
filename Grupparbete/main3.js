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
            
         }else if(q==5){
            newImg.src = "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
            
         }
         else if(q==6){
            newImg.src = "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
            
         }
         else if(q==7){
            newImg.src = "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
            
         }
         else if(q==8){
            newImg.src = "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
            
         }
         else if(q==9){
            newImg.src = "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
            
         }
         else if(q==10){
            newImg.src = "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
            
         }
         else if(q==11){
            newImg.src = "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
            
         }
         else if(q==12){
            newImg.src = "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
            
         }
         else if(q==13){
            newImg.src = "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
            
         }
         else if(q==14){
            newImg.src = "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
            
         }
         else if(q==15){
            newImg.src = "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
            
         }
         else if(q==16){
            newImg.src = "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
            
         }
         else if(q==17){
            newImg.src = "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
            
         }
         else if(q==18){
            newImg.src = "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
            
         }
         else if(q==19){
            newImg.src = "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
            
         }
         else if(q==20){
            newImg.src = "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
            
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

