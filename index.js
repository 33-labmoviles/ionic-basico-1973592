console.log("Hola mundo")
var total=0;
var monto=0;
var totalMsg=document.getElementById("totalMsg");
var descripcionTxt = document.getElementById("descripcion");
var listaTicket = document.getElementById("ticket");
var montoTxt=document.getElementById("montoTxt");
//console.log("montoTxt");

function calcularTotal(){
    monto=montoTxt.value;
    monto=parseInt(monto);
    total=total+monto;
    //console.log(total);
    totalMsg.innerHTML="Total:" + total;
    imprimirTicket(monto);
}

function imprimirTicket(monto){
    var elementoTicket = document.createElement("ion-item");
    var labelElemento = document.createElement("ion-label");

    labelElemento.innerHTML = descripcionTxt.value+" : $"+monto;
    elementoTicket.appendChild(labelElemento);
    listaTicket.appendChild(elementoTicket);
    descripcionTxt.value= "";
    montoTxt.value="";
}
