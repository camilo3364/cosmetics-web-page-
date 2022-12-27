const menu = document.querySelector('.unas');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.Todos');
const btnUnas = document.querySelector('.Unas');
const btnCabello = document.querySelector('.Cabello');
const btnPodologia = document.querySelector('.Podologia');
const btnCosmetologia = document.querySelector('.Cosmetologia');
const btnReducciones = document.querySelector('.Reducciones');
const btnInyecciones = document.querySelector('.Inyecciones');
const contenedorTratamientos = document.querySelector('.tratamientos');

document.addEventListener('DOMContentLoaded', ()=>{
    eventos();
    tratamientos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length  > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    console.log(navegacion.children);
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar,overlay);
}

const cerrarMenu = (boton,overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    });
});

imagenes.forEach(imagen => {
   
    observer.observe(imagen);
});

const tratamientos = () =>{
    let tratamientoArreglo = [];
    const tratamiento = document.querySelectorAll('.tratamiento');
    
    tratamiento.forEach(tratamiento => tratamientoArreglo = [...tratamientoArreglo,tratamiento]);
    
    const unas = tratamientoArreglo.filter(unas => unas.getAttribute('data-tratamiento')==='unas');
    const cabello = tratamientoArreglo.filter(cabello => cabello.getAttribute('data-tratamiento')==='Cabello');
    const podologia = tratamientoArreglo.filter(podologia => podologia.getAttribute('data-tratamiento')==='Podologia');
    const cosmetologia = tratamientoArreglo.filter(cosmetologia => cosmetologia.getAttribute('data-tratamiento')==='Cosmetologia');
    const reducciones = tratamientoArreglo.filter(reducciones => reducciones.getAttribute('data-tratamiento')==='Reducciones');
    const inyecciones = tratamientoArreglo.filter(inyecciones => inyecciones.getAttribute('data-tratamiento')==='Inyecciones');
    
    mostrarTratamientos(unas, cabello, podologia, cosmetologia, reducciones, inyecciones, tratamientoArreglo);
}

const mostrarTratamientos = (unas, cabello, podologia, cosmetologia, reducciones, inyecciones, todos) =>{
    btnUnas.addEventListener('click', () =>{
        limpiarHtml(contenedorTratamientos);
        unas.forEach(una => contenedorTratamientos.appendChild(una));
    })

    btnCabello.addEventListener('click', () =>{
        limpiarHtml(contenedorTratamientos);
        cabello.forEach(cabello => contenedorTratamientos.appendChild(cabello));
    })

    btnPodologia.addEventListener('click', () =>{
        limpiarHtml(contenedorTratamientos);
        podologia.forEach(podologia => contenedorTratamientos.appendChild(podologia));
    })

    btnCosmetologia.addEventListener('click', () =>{
        limpiarHtml(contenedorTratamientos);
        cosmetologia.forEach(cosmetologia => contenedorTratamientos.appendChild(cosmetologia));
    })

    btnReducciones.addEventListener('click', () =>{
        limpiarHtml(contenedorTratamientos);
        reducciones.forEach(reducciones => contenedorTratamientos.appendChild(reducciones));
    })

    btnInyecciones.addEventListener('click', () =>{
        limpiarHtml(contenedorTratamientos);
        inyecciones.forEach(inyecciones => contenedorTratamientos.appendChild(inyecciones));
    })

    btnTodos.addEventListener('click', () =>{
        limpiarHtml(contenedorTratamientos);
        todos.forEach(todos => contenedorTratamientos.appendChild(todos));
    })

}

const limpiarHtml =(contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}