const btnDepartamentos = document.getElementById('btn-departamentos');
      btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
      grid = document.getElementById('grid'),
      contenedorEnlacesNav =  document.querySelector('#menu .contenedor-enlaces-nav'),
      contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
      esDispositivoMovil = () => window.innerWidth <= 800;


btnDepartamentos.addEventListener('mouseover', () => {

       if(!esDispositivoMovil()) {

        grid.classList.add('activo');  

       }

});


grid.addEventListener('mouseleave', () => {

    if(!esDispositivoMovil()) {

    grid.classList.remove('activo');  

    }

});


document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => { 
        if(!esDispositivoMovil()){
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');  
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');
                }
            });
        };   
        
    });
});




//EVENLISTENERS PARA DISPOSITIVO MOVIL
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
    e.preventDefault();
    if(contenedorEnlacesNav.classList.contains('activo')){
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
    } else {
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden';
    }
   
    //.classList.add('activo');
    
});


//CLICK EN BOTON DE TODOS LOS DEPARTAMENTOS (PARA VERSION MOBIL)
btnDepartamentos.addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.add('activo');
    btnCerrarMenu.classList.add('activo');

});



//BOTON DE REGRESAR EN EL MENU DE CATEGORIAS
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.remove('activo');
    btnCerrarMenu.classList.remove('activo');
});


document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        if(esDispositivoMovil()){
            contenedorSubCategorias.classList.add('activo');
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');

                }
            });
        }
    });
});



//BOTON DE REGRESAR EN EL MENU DE CATEGORIAS
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        contenedorSubCategorias.classList.remove('activo');  
    });  
});



btnCerrarMenu.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento) => {
        elemento.classList.remove('activo');
    });
    document.querySelector('body').style.overflow = 'visible'; //Reestablece el overflow para que el usuario puede subir y bajar en la pagina
});














//console.log(e.target.dataset.categoria);

//console.log(categoria.dataset.categoria);

//console.log(e.target);