

//funcion modal para manipular los eventos

const miVentanaEmergente = document.getElementById('ventanaEmergente');

// agregar un observador sobre el modal para monitorearlo

miVentanaEmergente.addEventListener('show.bs.modal', function(event){
    console.log('se está abriendo el modal');

    //reconocer el elemento q habilita el evento modal 
    let boton = event.relatedTarget //related Target es el etiquetado relacionado al evento

    let mensaje = boton.getAttribute('data-titulo')

    let contenido = boton.getAttribute('data-contenido')

    document.getElementById('tituloModal').innerText = mensaje 
    document.querySelector('.modal-body').innerHTML = contenido

})




