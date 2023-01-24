
const cargo =  [
  {meses: 12, interes:0.5 },
  {meses: 6, interes: 0.45},
  {meses: 3, interes: 0.3},
  {meses: 1, interes: 0},
];




function calcularP (cantidad, cuotas, porcentaje) {
 
  
 return  (cantidad + cantidad * porcentaje) / cuotas;
 
}


for (let i = 1; i <= 5; i++) {
  let ingreseNombre = prompt("ingrese nombre cliente:");
  if (ingreseNombre == "") {
    alert("ingrese un nombre valido para volver a empezar");
    break;
  }

  alert("Numero de consulta: " + i + "  Nombre del cliente: " + ingreseNombre);
  const cantidad = Number(prompt("Ingrese el monto del prestamo:"));
  const cuotas = Number(prompt("Ingrese cantidad de cuotas, valores aceptados para cuotas 1, 3 , 6 , 12"));
 

  let porcentaje = cargo.find(nume =>nume.meses === cuotas).interes;

  let total =  calcularP(cantidad, cuotas, porcentaje)
  

       
  

  
  alert(
    "El CFT es del " + (porcentaje*100) + " % " +" Monto Total con intereses $" + (cantidad + cantidad * porcentaje));

  alert("Monto a pagar por mes $ " +total.toFixed(2));
}
