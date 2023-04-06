var _img = document.getElementById('product');
var newImg = new Image;
newImg.onload = function() {
    _img.src = this.src;
}
newImg.src = localStorage.getItem("koptBild"); 
console.log(localStorage.getItem("koptBild"))
console.log(localStorage.getItem("kopt"))


console.log(localStorage.getItem("namnet"))
         const summary = document.getElementById("summary");
         const recieve1 = document.getElementById("recieve1");
         const recieve2 = document.getElementById("recieve2");
         const recieve3 = document.getElementById("recieve3");
         const recieve4 = document.getElementById("recieve4");
         const recieve5 = document.getElementById("recieve5");
         const recieve6 = document.getElementById("recieve6");
         summary.appendChild(document.createTextNode(localStorage.getItem("kopt")));
         recieve1.appendChild(document.createTextNode(localStorage.getItem("namnet")));
         recieve2.appendChild(document.createTextNode(`${localStorage.getItem("emailet")}`));
         recieve3.appendChild(document.createTextNode(`${localStorage.getItem("numret")}`));
         recieve4.appendChild(document.createTextNode(`${localStorage.getItem("adressen")}`));
         recieve5.appendChild(document.createTextNode(`${localStorage.getItem("postnumret")}`));
         recieve6.appendChild(document.createTextNode(`${localStorage.getItem("orten")}`));
         console.log(localStorage.getItem("namnet"))

