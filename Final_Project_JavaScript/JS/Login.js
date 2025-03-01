document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a, button").forEach(function (element) {
      element.addEventListener("click", function (event) {
        const targetUrl =
          this.getAttribute("href") || this.getAttribute("data-target-url");
        if (targetUrl) {
          event.preventDefault();
          transitionToPage(targetUrl);
        }
      });
    });
  });
  
  function transitionToPage(url) {
    document.body.classList.add("fade-out");
    setTimeout(function () {
      window.location.href = url;
    }, 500);
  }
  
  window.addEventListener("load", function () {
    document.body.classList.add("fade-in");
  });
  
  // 
  function SignUp_form(event){
    event.preventDefault();
    window.location.href = "SignUp.html";
}
// 
function Login_User(event){
  event.preventDefault();
  // 
  const email = document.getElementById('email').value;
  const matkhau = document.getElementById('matkhau').value;
  // 
  const checkEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!checkEmail.test(email)) {
        alert('Địa chỉ email không hợp lệ');
        return;
    }
  // 
  const users = JSON.parse(localStorage.getItem('users')) || [];
  // 
  const user = users.find(u => u.email === email && u.matkhau === matkhau);
  // 
  if (user) {
      alert('Đăng nhập thành công');
      transitionToPage('home.html');
  } else {
      alert('Email hoặc mật khẩu không chính xác');
  }
}