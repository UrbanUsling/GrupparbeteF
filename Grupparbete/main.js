let bought;
let bought_serialized = JSON.stringify(bought);
function buyFunction(clickedValue) {
    bought_serialized=clickedValue;
   console.log(clickedValue);
   console.log(bought_serialized);
   localStorage.setItem("chosen", bought_serialized);
   window.open("order.html");
   
}




