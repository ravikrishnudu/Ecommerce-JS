//show cart
(function () {
    const cartinfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartinfo.addEventListener('click', function (){
        cart.classList.toggle('show-cart');

    })
})();
    
    