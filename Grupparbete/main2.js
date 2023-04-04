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
            
         }else if(q==6){
            newImg.src = "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
            
         }else if(q==7){
            newImg.src = "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
            
         }else if(q==8){
            newImg.src = "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
            
         }else if(q==9){
            newImg.src = "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
            
         }else if(q==10){
            newImg.src = "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
            
         }else if(q==11){
            newImg.src = "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
            
         }else if(q==12){
            newImg.src = "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
            
         }else if(q==13){
            newImg.src = "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
            
         }else if(q==14){
            newImg.src = "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
            
         }else if(q==15){
            newImg.src = "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
            
         }else if(q==16){
            newImg.src = "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
            
         }else if(q==17){
            newImg.src = "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
            
         }else if(q==18){
            newImg.src = "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
            
         }else if(q==19){
            newImg.src = "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
            
         }else if(q==20){
            newImg.src = "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
            
         }
const myForm = document.getElementById('my-form');
const names = document.getElementById('name1');
const email = document.getElementById('email1');
const phone = document.getElementById('phone1');
const address = document.getElementById('address1');
const postnumber = document.getElementById('post1');
const locality = document.getElementById('locality1');



myForm.addEventListener('submit', onSubmit);
myForm.addEventListener('submit', validateName);
myForm.addEventListener('submit', validateEmail);
myForm.addEventListener('submit', validatePhone);
myForm.addEventListener('submit', validateAddress);
myForm.addEventListener('submit', validatePost);
myForm.addEventListener('submit', validateLocality);

    function validateName() {
      let x = document.getElementById("name1");
      console.log(x.value);
      if (x.value.length<2) {
          alert("Namnet är för kort");
          return false;
      } else if (x.value.length > 50) {
          alert("Namnet är för långt");
          return false;
      }else {return true;}
      }
  
  function validateEmail() {
      let x = document.getElementById("email1");
      if (x.value.length>50) {
          alert("E-postadressen är för lång");
          return false;
      }else if (x.value.indexOf("@")<0){
          alert("E-postadressen måste innehålla @");
          return false;
      }else if (x.value.indexOf("@")==0){
          alert("E-postadressen får ej börja med @");
          return false;
      }else {return true;}
  }
  
  function validatePhone() {
      let x = document.getElementById("phone1");
      let y = /^[0-9-()]+$/;
      if (x.value.length>50) {
          alert("Telefonnummret är för långt");
          return false;
      } else if (!x.value.match(y)) { //Funkar ej//
          alert("Telefonnummret får bara innehålla siffor, -, och ()");
          return false;
      }else {return true;}
      }
  
  function validateAddress() {
      let x = document.getElementById("address1");
      if (x.value.length>50) {
          alert("Gatuadressen är för lång");
          return false;
      }else {return true;}
      }
  
  function validatePost() {
      let x = document.getElementById("post1");
      let y = /^[0-9 ]+$/;
      x.setAttribute("pattern", "[0-9]{3}+ [0-9]{2}") //Funkar ej//
      if (!x.value.match(y)){
          alert("Postnummret får bara innehålla siffror")
          return false;
      }else if (x.value.indexOf(" ")!=3){
          alert("Postnummret måste ha mellanslag efter 3:e siffran");
          return false;
      }else if (x.value.indexOf(" ")!=x.value.lastIndexOf(" ")){
          alert("Postnummret får bara ha ett mellanslag");
          return false;
      }else if (x.value.length>6) { //Funkar ej, onödig om ovanstående check funkar//
          alert("Postnummret är för långt");
          return false;
      }else if (x.value.length<6) { //Funkar ej, onödig om ovanstående check funkar//
          alert("Postnummret är för kort");
          return false;
      }else {return true;}
      }
  
  function validateLocality() {
      let x = document.getElementById("locality1");
      if (x.value.length>50) {
          alert("Ortnamnet är för långt");
          return false;
      }else if (x.value.length<2){
          alert("Ortnamnet är för kort");
          return false;
      }else {return true;}
      }
      function onSubmit(e){
   
         e.preventDefault();
         if (validateAddress() && validateAddress() && validateLocality() && validateName() & validatePhone() && validatePost()){
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