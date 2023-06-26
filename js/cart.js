
const cart = document.querySelector('.cart-items-container')


var btn_add_carts = document.getElementsByClassName('btn')


for (var i = 0; i < btn_add_carts.length; i++) {
  var btn_add_cart = btn_add_carts[i];
  btn_add_cart.addEventListener("click", function (event) {
    var img = $(this).closest('div').find('img').attr('src')
    var title = $(this).closest('div').find('h3').html()
    var price = $(this).prev('div').contents().get(0).nodeValue
    addItemToCart(title, price, img)
    cart.classList.add('active');
  })
}

document.getElementById('lienhe').addEventListener('click', function() {
  if (!Swal.isVisible()) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Đã gửi mã giảm giá!',
      showConfirmButton: false,
      timer: 1500
    })
}
});

function addItemToCart(title, price, img) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-item')
  var cartItems = document.getElementsByClassName('cart-items-container')[0]
  var cart_title = $('.cart-item-name')
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Sản phẩm đã được thêm vào giỏ hàng',
    showConfirmButton: false,
    timer: 1500
  });
  if (isItemInCart(title)) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Sản phẩm đã có sẵn trong giỏ hàng',
    });
    return;
}



  var cartRowContents = `<span class="fas fa-times delete-item"></span>
    <img src="${img}" alt="">
    <div class="content">
        <h3 class="cart-item-name">${title}</h3>
        <div class="price">${price}</div>
    </div>
    `
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('delete-item')[0].addEventListener('click', function () {
    var button_remove = event.target
    button_remove.parentElement.remove()
  })

}

$(document).ready(function() {
  $('.readmore').click(function(e) {
    $('p').toggle();
  });
});

var heartIcons = document.querySelectorAll('a.fas.fa-heart');

heartIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Đã thêm một lượt thích',
            showConfirmButton: false,
            timer: 1500
        });
    });
});

var cartItems = []; // Mảng lưu trữ các sản phẩm trong giỏ hàng

function addToCart(event) {
    event.preventDefault();

    var cart = document.querySelectorAll('.cart-items-container');
    var box = event.target.closest('.box');
    var img = box.querySelector('img').src;
    var title = box.querySelector('.product-title').innerHTML;
    var price = box.querySelector('.price').innerHTML;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Sản phẩm đã được thêm vào giỏ hàng',
      showConfirmButton: false,
      timer: 1500
    });
    if (isItemInCart(title)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sản phẩm đã có sẵn trong giỏ hàng',
        });
        return;
    }

    addItemToCart(title, price, img);
    cart.classList.add('active');
}

function isItemInCart(title) {
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].title === title) {
            return true;
        }
    }
    return false;
}

function addItemToCart(title, price, img) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-item');

    var cartRowContents = `
        <span class="fas fa-times delete-item"></span>
        <img src="${img}" alt="">
        <div class="content">
            <h3 class="cart-item-name">${title}</h3>
            <div class="price">${price}</div>
        </div>
    `;

    cartRow.innerHTML = cartRowContents;

    var cartItemsContainer = document.querySelector('.cart-items-container');
    cartItemsContainer.appendChild(cartRow);

    cartRow.querySelector('.delete-item').addEventListener('click', function () {
        cartRow.remove();
    });

    // Thêm sản phẩm vào mảng giỏ hàng
    cartItems.push({ title: title, price: price, img: img });
}
