



  var form = document.getElementById('login-form');
  
  // Thêm sự kiện submit cho form
  form.addEventListener('submit', function(event) {
    // Ngăn chặn hành động mặc định của form (không gửi đi và tải lại trang)
    event.preventDefault();
    // Kiểm tra trạng thái hiển thị của pop-up
    if (!Swal.isVisible()) {
      // Hiển thị pop-up thành công
      document.getElementById('login').addEventListener('click', function() {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Đăng nhập thành công!',
        showConfirmButton: false,
        timer: 1500
      })
      });
   
    
    // Gọi hàm xử lý dữ liệu hoặc thực hiện các hành động khác
    processData();
    }
  });
  
  // Hàm xử lý dữ liệu form
  function processData() {
     // Xử lý dữ liệu form
     var name = form.elements.name.value;
     var password = form.elements.password.value;
    // Xử lý dữ liệu form theo ý muốn
    console.log('Tên:', name);
    console.log('Mật khẩu:', password);
    
    // Chuyển hướng tới trang khác (nếu cần)
    
    window.location.href = './index.html';
  }

  // document.getElementById('login').addEventListener('click', function() {
  //   window.location.href = './index.html';
  // });

  document.getElementById('sign').addEventListener('click', function() {
    redirectToLogin();
  });
 
  // POPUP SIGNUP
  function redirectToSign() {
    if (!Swal.isVisible()) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Đăng kí thành công!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  
    // Chuyển hướng đến trang Login.html
    setTimeout(function() {
      window.location.href = './Login.html';
    }, 2000);
  }


  
  document.getElementById('login').addEventListener('click', function() {
    redirectToLogin();
  });
 
  // POPUP SIGNUP
  function redirectToLogin() {
    if (!Swal.isVisible()) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Đăng nhập thành công!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  
    // Chuyển hướng đến trang Login.html
    setTimeout(function() {
      window.location.href = './index.html';
    }, 2000);
  }
  
  
  

