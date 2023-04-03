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
const myForm = document.getElementById('my-form');
const names = document.getElementById('name1');
const email = document.getElementById('email1');
const phone = document.getElementById('phone1');

myForm.addEventListener('submit', onSubmit);


function onSubmit(e){
    e.preventDefault();
    console.log("hej");
    localStorage.setItem("namnet", names.value);
    localStorage.setItem("emailet", email.value);
    localStorage.setItem("numret", phone.value);
    console.log(names.value);
    console.log(email.value);
    console.log(localStorage.getItem("numret"));
    console.log(localStorage.getItem("emailet"));
    console.log(localStorage.getItem("namnet"));
console.log(localStorage.getItem("chosen"));
window.open("confirmation.html");
//const recieve = document.createElement("recieve");
//recieve.appendChild(document.createTextNode(localStorage.getItem("namnet")));
//document.getElementById("recieve").innerHTML= localStorage.getItem("namnet");
}