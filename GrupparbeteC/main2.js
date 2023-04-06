var _img = document.getElementById('product');
var newImg = new Image;
newImg.onload = function() {
    _img.src = this.src;
}
newImg.src = localStorage.getItem("koptBild"); 
console.log(localStorage.getItem("koptBild"));

const myForm = document.getElementById('my-form');
const names = document.getElementById('name1');
const email = document.getElementById('email1');
const phone = document.getElementById('phone1');
const address = document.getElementById('address1');
const postnumber = document.getElementById('post1');
const locality = document.getElementById('locality1');


myForm.addEventListener('submit', onSubmit);
      
function onSubmit(e){
    e.preventDefault();
    let x1;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
      console.log(names.value);
      if (names.value.length<2) {
          alert("Namnet är för kort");
          x1 = 1;
      } else if (names.value.length > 50) {
          alert("Namnet är för långt");
          x1=1;
      }else {x1=0;}
      
  
  
      if (email.length>50) {
          alert("E-postadressen är för lång");
          x2=1;
      }else if (email.value.indexOf("@")<0){
          alert("E-postadressen måste innehålla @");
          x2=1;
      }else if (email.value.indexOf("@")==0){
          alert("E-postadressen får ej börja med @");
          x2=1;
      }else {x2=0;}

  
  
  
      let y = /^[0-9-()]+$/;
      if (phone.value.length>50) {
          alert("Telefonnummret är för långt");
          x3=1;
      } else if (!phone.value.match(y)) { //Funkar ej//
          alert("Telefonnummret får bara innehålla siffor, -, och ()");
          x3=1;
      }else {x3=0;}
      
  
  
      if (address.value.length<4) {
        alert("Gatuadressen är för kort");
        x4=1;
      }else if (address.value.length>50) {
        alert("Gatuadressen är för lång");
        x4=1;
      }else {x4=0;}
      
  
  
      let z = /^[0-9 ]+$/;
      postnumber.setAttribute("pattern", "[0-9]{3}+ [0-9]{2}") //Funkar ej//
      if (!postnumber.value.match(z)){
          alert("Postnummret får bara innehålla siffror och ett mellanslag")
          x5=1;
      }else if (postnumber.value.indexOf(" ")!=3){
          alert("Postnummret måste ha mellanslag efter 3:e siffran");
          x5=1;
      }else if (postnumber.value.indexOf(" ")!=postnumber.value.lastIndexOf(" ")){
          alert("Postnummret får bara ha ett mellanslag");
          x5=1;
      }else if (postnumber.value.length>6) { //Funkar ej, onödig om ovanstående check funkar//
          alert("Postnummret är för långt");
          x5=1;
      }else if (postnumber.value.length<6) { //Funkar ej, onödig om ovanstående check funkar//
          alert("Postnummret är för kort");
          x5=1;
      }else {x5=0;}
      
  
  
      if (locality.value.length>50) {
          alert("Ortnamnet är för långt");
          x6=1;
      }else if (locality.value.length<2){
          alert("Ortnamnet är för kort");
          x6=1;
      }else {x6=0;}
      
   
      
//validateEmail() && validatePhone() && validateAddress() && validatePost() && validateLocality()
         if (x1== 0 && x2 == 0 && x3== 0 && x4 == 0&& x5 == 0 && x6 == 0){
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
         }
         }