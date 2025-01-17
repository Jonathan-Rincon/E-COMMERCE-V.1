// Array de productos
const productos = [
    { id: 1, nombre: 'Awesome', imagen: 'img/products/Awesome.jpg', precio: 100 },
    { id: 2, nombre: 'Bleach', imagen: 'img/products/Bleach.jpg', precio: 130 },
    { id: 3, nombre: 'Broom', imagen: 'img/products/Broom.jpg', precio: 190 },
    { id: 4, nombre: 'Brown-bags', imagen: 'img/products/Brown-bags.jpg', precio: 390 },
    { id: 5, nombre: 'Customer Bags Big', imagen: 'img/products/Customer-Bags-Big.jpg', precio: 300 },
    { id: 6, nombre: 'Customer Bags Smalls', imagen: 'img/products/Customer-Bags-Smalls.jpg', precio: 630 },
    { id: 7, nombre: 'DCR Paper', imagen: 'img/products/DCR-Paper.jpg', precio: 540 },
    { id: 8, nombre: 'Dish-soap', imagen: 'img/products/Dish-soap.jpg', precio: 690 },
    { id: 9, nombre: 'Gloves-S', imagen: 'img/products/Gloves-S.jpg', precio: 400 },
    { id: 10, nombre: 'Handsoap', imagen: 'img/products/Handsoap.jpg', precio: 730 },
    { id: 11, nombre: 'Ice-bags', imagen: 'img/products/Ice-bags.jpg', precio: 4190 },
    { id: 12, nombre: 'Jumbo Toilet Paper', imagen: 'img/products/Jumbo-Toilet-Paper.jpg', precio: 390 },
    { id: 13, nombre: 'Microfiber-Towels', imagen: 'img/products/Microfiber-Towels.jpg', precio: 390 },
    { id: 14, nombre: 'Mop Head', imagen: 'img/products/Mop-Head.jpg', precio: 390 },
    { id: 15, nombre: 'Mop Stick', imagen: 'img/products/Mop-Stick.jpg', precio: 390 },
    { id: 16, nombre: 'Multi Fold Towels', imagen: 'img/products/Multi-Fold-Towels.jpg', precio: 390 },
    { id: 17, nombre: 'Napkins', imagen: 'img/products/Napkins.jpg', precio: 390 },
    { id: 18, nombre: 'Paper Towell Roll', imagen: 'img/products/Paper-Towell-Roll.jpg', precio: 390 },
    { id: 19, nombre: 'Register Paper', imagen: 'img/products/Register-Paper.jpg', precio: 390 },
    { id: 20, nombre: 'Seat Covers', imagen: 'img/products/Seat-Covers.jpg', precio: 390 },
    { id: 21, nombre: 'Single Fold Towels', imagen: 'img/products/Single-Fold-Towels.jpg', precio: 390 },
    { id: 22, nombre: 'Sponge', imagen: 'img/products/Sponge.jpg', precio: 390 },
    { id: 23, nombre: 'Toilet Paper', imagen: 'img/products/Toilet-Paper.jpg', precio: 390 },
    { id: 24, nombre: 'Trash Bags 45GL', imagen: 'img/products/Trash-bags-45gl.jpg', precio: 390 },
    { id: 25, nombre: 'Windex', imagen: 'img/products/Windex.jpg', precio: 390 },
  ];
  
  // Función para cargar productos en el contenedor
  function cargarProductos() {
    const contenedor = document.getElementById('products-container');
  
    productos.forEach(producto => {
      const productoElemento = document.createElement('article');
      productoElemento.classList.add('products__item');
      productoElemento.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" class="products__img">
        <div class="products__div-qty">
          <label class="products__labels" for="product${producto.id}">Qty: </label>
          <input type="number" id="product${producto.id}" name="product${producto.id}" class="products__qtyBox" min="0" max="12">
          <i class="cart__toAdd">
            <img src="img/Icono-agregar-al-carrito.png" alt="Icono Agregar al carrito" class="products__icon">
          </i>
        </div>
        <h3 class="products__title">${producto.nombre}</h3>
        <p class="products__price">$${producto.precio}</p>
      `;
      contenedor.appendChild(productoElemento);
    });
  }
  
  // Llama a la función para cargar los productos al cargar la página
  cargarProductos();
  