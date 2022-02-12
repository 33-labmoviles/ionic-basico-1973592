console.log("Hola mundo")
var total=0;
var monto=0;
var totalMsg=document.getElementById("totalMsg");

var montoTxt=document.getElementById("montoTxt");
//console.log("montoTxt");

function calcularTotal(){
    monto=montoTxt.value;
    monto=parseInt(monto);
    total=total+monto;
    console.log(total);
    totalMsg.innerHTML="Total:" + total;
}
