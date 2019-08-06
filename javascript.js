document.getElementById('formulario').addEventListener('submit', guardar);

function guardar(e){

 let Nombre = document.getElementById('Nombre').value;
 let Descripcion = document.getElementById('Descripcion').value;

 let tarea = {
   Nombre,
   Descripcion
 };

if(localStorage.getItem('tareas') === null){
  let tareas = [];
  tareas.push(tarea);
  localStorage.setItem('tareas', JSON.stringify(tareas));
}else {
  let tareas = JSON.parse(localStorage.getItem('tareas'));
  tareas.push(tarea);
  localStorage.setItem('tareas', JSON.stringify(tareas));
}







 mostrar();
 document.getElementById('formulario').reset();
 e.preventDefault();
}


function mostrar(){

  let tareas = JSON.parse(localStorage.getItem('tareas'));
  let tareasM = document.getElementById('tareas');

  tareasM.innerHTML = '';

  for(let i = 0; i < tareas.length ; i++){
    let nombre = tareas[i].Nombre;
    let descripcion = tareas[i].Descripcion;

    tareasM.innerHTML += `<div class="res">
          <p>${nombre} - ${descripcion}</p>
          <button class="borrar" onclick="borrarTareas('${nombre}')">Borrar </button>
      </div>`;
}
}

function borrarTareas (nombre) {
  let tareas = JSON.parse(localStorage.getItem('tareas'));
  for(let i = 0; i < tareas.length; i++){
    if (tareas[i].Nombre == nombre){
      tareas.splice(i, 1);
    }
  }
  localStorage.setItem('tareas', JSON.stringify(tareas));
  mostrar();
}
