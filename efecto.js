var propiedades = "";
var producto;


function prende_produc(prod){
   var alam = prod
   producto = document.getElementById(alam);
   producto.style = 'box-shadow: 0 10px 56px 0 white;'
}
function apaga_produc(prod){

   producto = document.getElementById(prod);
   producto.style -= 'box-shadow: 0 10px 56px 0 white;'
}

