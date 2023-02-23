//implementacion local storage, que muestre un div con las ultimas consultas

let nConsultas = JSON.parse(localStorage.getItem("nConsultas")) || [];
//if(nConsultas){
  //localStorage.setItem("nConsultas",JSON.stringify(nConsultas));
//}else{
  //localStorage.setItem("nConsultas",JSON.stringify([]));
//}
const mostrarConsulta = ()=>{
  let lastHTML="";
  let nConsultas = JSON.parse(localStorage.getItem("nConsultas"));
  nConsultas.map(nConsulta=>{
    lastHTML+= `<div class="nConsulta">
    <h2> ultimas consultas</h2>
    <ul>
      <li> nombre: ${nConsulta.ingreseNombre}  </li>
      <li>monto: ${nConsulta.cantidad} </li>
      <li>El interes es del: ${nConsulta.montoC} % </li>
      <li>monto: $ ${nConsulta.totalInteres} </li>
      <li>A pagar en ${nConsulta.valor} Cuotas mensuales de: ${nConsulta.total.toFixed(2)} </li>
    </ul>`; 
  });
  document.querySelector("#last").innerHTML=lastHTML;
}

let total, montoCinteres, resp;

  
  
  
  let divResultado = document.querySelector(".resultado");
  let cargo =[]
  
  let showO = ()=>{
    for (let prop in cargo){
      console.log(prop);
      console.log(cargo[prop]);
    }
  }
  
    fetch("datos.json")
    .then((res)=> res.json())
    .then((data)=>{
     
     cargo = data;
     showO()
    })
      
   
  
  
  

  //funcion para obtener el valor checked de los imputs

 function verR (){
   let valor = parseInt(document.form.cuotas.value);
   console.log(valor)
   return valor;
   
}








//let porcentaje = cargo.find(findInt).interes;
function findInt(element){
 console.log(element.meses === verR())
 return element.meses === verR();
  
}


//console.log(porcentaje)
// funcion realizar los cañculos necesarios
function calcularP () {
 
  let valor=verR();
  let cantidad = parseInt(document.querySelector("#monto").value);
  let ingreseNombre = document.querySelector("#user").value;
  
  let porcentaje = cargo.find(nume =>nume.meses == valor).interes;  
  let divResumen= document.querySelector(".resumen");
  divResumen.style.display="none"

  if (ingreseNombre.trim() === "" || cantidad == "") {
    Swal.fire({
      title: 'Algo salio mal',
      text: 'Ingrese los datos de forma correcta',
      icon: 'error',
      showCancelButton: false,
      showConfirmButton: false
  })
    //mostrarError("msj-error", "Ingresar datos correctos");
  return;
  }

  let totalInteres= cantidad+cantidad*porcentaje;
  let montoC = porcentaje * 100; 
  
  
   let total= (cantidad + cantidad * porcentaje) / valor;
   //montoCinteres = cantidad+cantidad*porcentaje;
   let consultas = {cantidad, ingreseNombre, totalInteres, montoC, total, valor}
  nConsultas.push(consultas);
  localStorage.setItem("nConsultas", JSON.stringify(nConsultas));
  document.querySelector("#form").reset();
  mostrarConsulta();
   


   divResumen.style.backgroundColor="#fff";
  divResumen.style.display="block";
  divResumen.innerHTML= `<div style="text-align:center">
                          <img src="Ellipsis-1s-200px.gif" width=300 height=300>
                          </div>`;
   
setTimeout(()=>{
  divResumen.style.backgroundColor="#00838f";
  divResumen.innerHTML=`
                         <h2> Resumen</h2>
                          <ul>
                            <li> nombre: ${ingreseNombre}  </li>
                            <li>monto: ${cantidad} </li>
                            <li>El interes es del: ${montoC} % </li>
                            <li>monto: $ ${totalInteres} </li>
                            <li>A pagar en ${valor} Cuotas mensuales de: ${total.toFixed(2)} </li>
                          </ul>`;
                      
},2000);

console.log(total)
     

   
  } 
  
