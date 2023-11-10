const contenedor = document.querySelector('.contenedorProductos');
const iconoFav = document.querySelector('#favoritos');

const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const btnCerrarModal = document.createElement('span');
btnCerrarModal.classList.add('close');
btnCerrarModal.innerHTML = '&times;';
modal.appendChild(btnCerrarModal);

function mostrarModal() {
    if (productosAgregados.length > 0) {
        actualizarContenidoModal();
        modal.style.display = 'block';
    }   
}

function ocultarModal() {
    modal.style.display = 'none';
}

function actualizarContenidoModal() {
    const contenidoModal = productosAgregados.map(producto => `<p>${producto.nombre} - ${producto.precio}</p>`).join('');

    modal.innerHTML = `
        <div class="modal-content">
            ${contenidoModal}
        </div>
    `;
}

btnCerrarModal.addEventListener('click', ocultarModal);

const productosAgregados = [];

fetch('../datosJSON.json')
    .then(resp => resp.json())
    .then(data => {
        const productos = data.productos;
        const array = Object.values(productos);

        array.forEach(producto => {
            const divCardProduct = document.createElement('DIV');
            divCardProduct.classList.add('cardProducto', 'visible');
            divCardProduct.innerHTML = `
                <div class="imgProducto">
                    <img class="imgCardProduct"
                        src="${producto.imagen}"
                        alt="">
                </div>
                <div class="tituloProducto">
                    <h3 class="tituloCard">${producto.nombre}</h3>
                </div>
                <div class="precio">
                    <h1 class="precioCard">$${producto.precio}</h1>
                </div>
                <div class="envioGratisProducto">
                    <h3 class="envioGratis"> Envio Gratis </h3>
                    <span id="favoriteProductCard" class=" btn-favorite material-symbols-outlined">
                        favorite
                    </span>
                </div>
            `;
            contenedor.appendChild(divCardProduct);

            const btnFavoritos = divCardProduct.querySelector('.btn-favorite');
            btnFavoritos.addEventListener('click', () => {
                const idProducto = btnFavoritos.closest('.cardProducto').getAttribute('data-id');
                const nombreProducto = btnFavoritos.closest('.cardProducto').querySelector('.tituloCard').textContent;
                const precioProducto = btnFavoritos.closest('.cardProducto').querySelector('.precioCard').textContent;

                const productoExistente = productosAgregados.find(
                    producto => producto.nombre === nombreProducto && producto.precio === precioProducto
                );

                if (productoExistente) {
                    Swal.fire({
                        icon: 'info',
                        title: 'Producto ya en favoritos',
                        text: `"${nombreProducto}" ya se encuentra en tu lista de favoritos.`,
                    });
                } else {
                    productosAgregados.push({ id: idProducto, nombre: nombreProducto, precio: precioProducto });

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        },
                    });
                    Toast.fire({
                        icon: 'success',
                        title: '¡Producto agregado a favoritos!',
                        text: `"${nombreProducto}" ha sido agregado a tus favoritos.`,
                    });

                    actualizarContenidoModal();
                }
            });
        });

        iconoFav.addEventListener('mouseover', mostrarModal);
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                ocultarModal();
            }
        });
    });
