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
const address = document.getElementById('address1');
const postnumber = document.getElementById('post1');
const locality = document.getElementById('locality1');

myForm.addEventListener('submit', validateName);
myForm.addEventListener('submit', validateEmail);
myForm.addEventListener('submit', validatePhone);
myForm.addEventListener('submit', validateAddress);
myForm.addEventListener('submit', validatePost);
myForm.addEventListener('submit', validateLocality);

myForm.addEventListener('submit', onSubmit);


function onSubmit(e){
    e.preventDefault();
    console.log("hej");
    localStorage.setItem("namnet", names.value);
    localStorage.setItem("emailet", email.value);
    localStorage.setItem("numret", phone.value);
    localStorage.setItem("adressen", address.value);
    localStorage.setItem("postnumret", postnumber.value);
    localStorage.setItem("orten", locality.value);
    console.log(names.value);
    console.log(email.value);
    console.log(localStorage.getItem("numret"));
    console.log(localStorage.getItem("emailet"));
    console.log(localStorage.getItem("namnet"));
    console.log(localStorage.getItem("adressen"));
    console.log(localStorage.getItem("postnumret"));
    console.log(localStorage.getItem("orten"));
console.log(localStorage.getItem("chosen"));
window.open("confirmation.html");
//const recieve = document.createElement("recieve");
//recieve.appendChild(document.createTextNode(localStorage.getItem("namnet")));
//document.getElementById("recieve").innerHTML= localStorage.getItem("namnet");
}

function validateName() {
    let x = document.getElementById("name1");
    console.log(x.value);
    if (x.value.length<2) {
        alert("Namnet är för kort");
        return false;
    } else if (x.value.length > 50) {
        alert("Namnet är för långt");
        return false;
    }
    }

function validateEmail() {
    let x = document.getElementById("email1").textContent;
    if (x.length>50) {
        alert("E-postadressen är för lång");
        return false;
    } else if (/@/.test(x)) {
        return true;
    }else
        alert("E-postadressen måste innehålla @");
        return false;
    }

function validatePhone() {
    let x = document.getElementById("phone1").textContent;
    let y = Number(x)
    if (x.length>50) {
        alert("Telefonnummret är för långt");
        return false;
    } else if (typeof y != Number) { //Funkar ej//
        alert("Telefonnummret får bara innehålla siffor, -, och ()");
        return false;
    }
    }

function validateAddress() {
    let x = document.getElementById("address1").textContent;
    if (x.length>50) {
        alert("Gatuadressen är för lång");
        return false;
    }
    }

function validatePost() {
    let x = document.getElementById("post1");
    x.setAttribute("pattern", "[0-9]{3} [0-9]{2}") //Funkar ej//
    if (x>6) { //Funkar ej, onödig om ovanstående check funkar//
        alert("Postnummret är för långt");
        return false;
    }
    }

function validateLocality() {
    let x = document.getElementById("locality1").textContent;
    if (x.length>50) {
        alert("Ortnamnet är för långt");
        return false;
    }
    }
