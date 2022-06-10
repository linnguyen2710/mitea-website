
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

function addItemToCart(title, price, img) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-item')
  var cartItems = document.getElementsByClassName('cart-items-container')[0]
  var cart_title = $('.cart-item-name')
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerHTML == title) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Sản phẩm đã có sẵn trong giỏ hàng'
      })
      return
    }
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

$(document).ready(function () {
  $('.read-more').click(function (e) { 
    $(this).prev('p').toggle()
  });
});