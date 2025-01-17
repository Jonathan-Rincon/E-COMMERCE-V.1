/**********  -------------   MENU ------------------ */
//Función para abrir el menu oprimiendo el icono del menu
const menuIcon = document.querySelector("#header__icono-menu");//lo selecciona por ID.
const menuT = document.querySelector(".menu");
menuIcon.addEventListener('click', () => {
    menuT.classList.toggle("show");
    //menuT.style.left = "0%";
    //menuT.style.display = "block";
});
//Función para cerrar el menu oprimiendo la X en el menu ya abierto
const menuClose = document.querySelector(".menu__close");
menuClose.addEventListener(`click`, () => {
    //menuT.style.left = "-100%";
    //menuT.style.display = "none";
    menuT.classList.toggle("show");
});
/*----------- Agregar Productos al carrito new version--------------- */
const products_carrito = document.querySelectorAll(".cart__toAdd");
const modal_qtyError = document.getElementById('modals__qtyError');

products_carrito.forEach(elem => {
    elem.addEventListener('click', () => {
        //---- Obtener los datos del producto seleccionado
        const elementParent = elem.parentElement.parentElement;
        const productImage = elementParent.getElementsByClassName(`products__img`)[0].getAttribute("src");
        const productName = elementParent.getElementsByClassName(`products__title`)[0].innerText;
        const productPrice = parseFloat(elementParent.getElementsByClassName(`products__price`)[0].innerText.replace('$', ''));
        const productQty = parseInt(elem.parentElement.getElementsByClassName(`products__qtyBox`)[0].value, 10);

        if (productQty <= 0 || productQty > 12) {
            modal_qtyError.style.display = "block";
            return;
        } else {
            //------- Crear el producto en el carrito
            const parent = document.querySelector('.cart__content');
            const cartItemHTML = `
                <div class="cart__products" data-id="${productName}">
                    <img src="${productImage}" alt="Producto" class="cart__products__img">
                    <p class="cart__description">${productName}</p>
                    <span class="cart__qty">${productQty}</span>
                    <p class="cart__price">$${productPrice}</p>
                    <i class="cart__i" onclick="eliminarDelCarrito(this)"><img class="cart__delete-icon" src="img/Icono-Delete.png"></i>
                </div>
            `;
            parent.insertAdjacentHTML('beforeend', cartItemHTML);

            // Recalcular el total
            recalcularTotal();
            updateCart();
            sumQty_cart();
        }
    });
});

function eliminarDelCarrito(element) {
    const productElement = element.closest('.cart__products');
    productElement.remove();

    // Recalcular el total
    recalcularTotal();
}

function recalcularTotal() {
    const cartItems = document.querySelectorAll('.cart__products');
    total = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.getElementsByClassName('cart__price')[0].innerText.replace('$', ''));
        const qty = parseInt(item.getElementsByClassName('cart__qty')[0].innerText, 10);
        total += price * qty;
    });

    document.getElementById('cart-total').innerText = total.toFixed(2);
}

function updateCart() {
    const iconRemove = document.querySelectorAll(".cart__i");
    iconRemove.forEach(elem => {
        elem.addEventListener('click', () => {
            const elementParent = elem.closest('.cart__products');
            elementParent.remove();

            // Recalcular el total
            recalcularTotal();

            sumQty_cart();
        });
    });
}

const modals_close = document.getElementsByClassName('modals-close')[0];
modals_close.addEventListener('click', () => {
    modal_qtyError.style.display = "none";
});
window.addEventListener('click', (event) => {
    if (event.target == modal_qtyError) {
        modal_qtyError.style.display = "none";
    }
});
/*//---Eliminar del carrito ----// 
function updateCart(){
const iconRemove = document.querySelectorAll(".cart__i");
iconRemove.forEach(elem => {
       // elem.addEventListener('click', eliminateItem(elem), false);
       // elem.removeEventListener('click', eliminateItem(elem), false);
        elem.addEventListener('click', () => {
            const elementParent = elem.parentElement;
            console.log(elementParent);
            elementParent.remove();
            sumQty_cart();
        })
       elem.removeEventListener('click', () => {
            const elementParent = elem.parentElement;
            console.log(elementParent);
            elementParent.remove();
            sumQty_cart();
        })
});
}*/
const cartIcon = document.querySelector("#header__icono-carrito");
const cart = document.querySelector(".cart");
cartIcon.addEventListener('click', () => {
    cart.classList.toggle("show");
    updateCart();//sirve para volver a cargar la info de cuantos productos hay en el carrito y se puedan modificar
    sumQty_cart();
});
function sumQty_cart(){
    const qtyInCart = document.querySelector('.header__carritoQty');
    const qtyproducts = document.querySelectorAll(".cart__products").length;
    console.log(qtyproducts);
    qtyInCart.innerText = qtyproducts;
}