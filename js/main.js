
// const contenedor = document.querySelector('.contenedorProductos')
// const todosLosProductos = document.querySelector('.navBarCategorias')

// let users = []

// const $email = document.querySelector('#inputCorreo')
// const $contraseña = document.querySelector('#inputContraseña')

// const $nombreCuenta = document.querySelector('#nombreRegistro')
// const $apellidoCuenta = document.querySelector('#apellidoRegistro')
// const $dni = document.querySelector('#dni')
// const $telefono = document.querySelector('#telefono')

// const $emailCuenta = document.querySelector('#email')
// const $emailConfirmadoCuenta = document.querySelector('#emailConfirmado')
// const $contraseñaCuenta = document.querySelector('#contraseña')
// const $contraseñaNuevaCuenta = document.querySelector('#contraseñaConfirmada')


// const $botonCrearCuenta = document.querySelector('#crearMiCuenta');
// $botonCrearCuenta.addEventListener('click', () => {
//     console.log('Crear Cuenta button clicked');
// });
// const $botonIniciarSesion = document.querySelector('#botonIniciarSesion');
// $botonIniciarSesion.addEventListener('click', () => {
//     console.log('Iniciar Sesión button clicked');
// });







// const Usuarios = function usuarios(correo, correoConfirmado, contraseña, contraseñaConfirmada) {
//     this.correo = correo;
//     this.correoConfirmado = correoConfirmado;
//     this.contraseña = contraseña;
//     this.contraseñaConfirmada = contraseñaConfirmada;
// }

//registrar
// $botonCrearCuenta.addEventListener('click', () => {
//     let correoCuenta  = $emailCuenta.value
//     let correoConfirmadoCuenta  = $emailConfirmadoCuenta.value
//     let contraseñaCuenta  = $contraseñaCuenta.value
//     let contraseñaNuevaCuenta  = $contraseñaNuevaCuenta.value

//     let usuario = new Usuarios(correoCuenta, correoConfirmadoCuenta, contraseñaCuenta, contraseñaNuevaCuenta)
//     users.push(usuario)
    
//     localStorage.setItem('users', JSON.stringify(users));
//     users.forEach(usuarios => {
//         console.log('nombre: ' + usuarios.correo);
//     })
// })

// iniciar sesion

// fetch('datos.json')
//     .then(resp => resp.json())
//     .then(data => {

//         const productos = data.productos
//         const array = Object.values(productos)  

//         array.forEach(producto => {

//             const divCardProduct = document.createElement('DIV')
//             divCardProduct.classList.add('cardProducto', 'visible')
//             divCardProduct.innerHTML = `
//             <div class="imgProducto">
//                 <img class="imgCardProduct"
//                     src="${producto.imagen}"
//                     alt="">
//             </div>
//             <div class="tituloProducto">
//                 <h3 class="tituloCard">${producto.nombre}</h3>
//             </div>
//             <div class="precio">
//                 <h1 class="precioCard">$${producto.precio}</h1>
//             </div>
//             <div class="envioGratisProducto">
//                 <h3 class="envioGratis"> Envio Gratis </h3>
//                 <span id="favoriteProductCard" class="material-symbols-outlined">
//                     favorite
//                 </span>
//             </div>
//             `
//             contenedor.appendChild(divCardProduct)
            
//         });

//     })  