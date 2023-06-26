let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

  document.getElementById('sign').addEventListener('click', function() {
    if (!Swal.isVisible()) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Đã đăng kí thành công!',
        showConfirmButton: false,
        timer: 1500
      })
  }
  });

  
