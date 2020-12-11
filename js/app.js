//show cart

(function () {

    const cartinfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartinfo.addEventListener('click', function () {
        // console.log("bassem");

        cart.classList.toggle('show-cart');

    })
})();


//add items to the cart
(function () {
    const cartbtn = document.querySelectorAll('.store-item-icon');
    cartbtn.forEach(function (btn) {

        btn.addEventListener('click', function (event) {

            // console.log(event.target);
            if (event.target.parentElement.classList.contains('store-item-icon')) {

                // console.log(event.target.parentElement.previousElementSibling.src);

                let fullpath = event.target.parentElement.previousElementSibling.src;
                let pos = fullpath.indexOf("img") + 3;
                let parpath = fullpath.slice(pos);

                const item = {};
                item.img = `img-cart${parpath}`

                let name = event.target.parentElement.parentElement.
                    nextElementSibling.children[0].children[0].textContent;

                // console.log(event.target.parentElement.parentElement.
                // nextElementSibling);
                item.name = name;
                let price = event.target.parentElement.parentElement.
                    nextElementSibling.children[0].children[1].textContent;

                let finalprice = price.slice(1).trim();

                item.price = finalprice;
                // console.log(finalprice);
                // console.log(item);
                const cartItem = document.createElement('div');

                cartItem.classList.add(
                    'cart-item',
                    'd-flex',
                    'justify-content-between',
                    'text-capitalize',
                    "my-3"
                );
                cartItem.innerHTML =
                    `<img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
     <div class="item-text">
  
       <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
       <span>$</span>
       <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
     </div>
     <a href="#" id='cart-item-remove' class="cart-item-remove">
       <i class="fas fa-trash"></i>
     </a>
   </div>`;

                //select cart
                const cart = document.getElementById('cart');

                const total = document.querySelector('.cart-total-container');
                cart.insertBefore(cartItem, total);
                alert("item added to the cart ");

                const deleteall = document.getElementById('clear-cart');

                deleteall.addEventListener('click', function () {
                    // console.log("bassem");
                    cartItem.innerHTML = ``;

                    const deletetotal = document.getElementById('cart-total');
                    deletetotal.innerHTML = 0;

                    const deleteinfo = document.getElementById("item-count");
                    deleteinfo.innerHTML = 0;

                    const removeitem = document.getElementById('cart-item-remove')
                    removeitem.addEventListener('click', function () {
                        console.log('bassem');

                    })
                });



                showtotal()
            }

        });

    });

    function showtotal() {
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');
        items.forEach(function (item) {
            total.push(parseFloat(item.textContent));
        });
        const totalmoneyv = total.reduce(function (total, item) {
            total += item;
            return total;
        }, 0)
        const nfinalmoney = totalmoneyv.toFixed(2);
        // console.log(totalmoneyv);

        document.getElementById('cart-total').textContent = nfinalmoney;
        document.querySelector('.item-total').textContent = nfinalmoney;
        document.getElementById('item-count').textContent = total.length;



    }



})();

//searchbar
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    localStorage.getElementById("store-items")
    input = document.getElementById('search-item');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
