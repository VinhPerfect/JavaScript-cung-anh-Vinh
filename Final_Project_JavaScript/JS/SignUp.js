document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a, button').forEach(function(element) {
        element.addEventListener('click', function(event) {
            const targetUrl = this.getAttribute('href') || this.getAttribute('data-target-url');
            if (targetUrl) {
                event.preventDefault();
                transitionToPage(targetUrl);
            }
        });
    });
});
// 
function transitionToPage(url) {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = url;
    }, 500); 
}
// 
window.addEventListener('load', function() {
    document.body.classList.add('fade-in');
});
// 
function Login_form(event){
    event.preventDefault();
    window.location.href = "Login.html";
}
// 
function SignUp_User(event){
    event.preventDefault();
    // 
    const hovaten = document.getElementById('hovaten').value;
    const email = document.getElementById('email').value;
    const matkhau = document.getElementById('matkhau').value;
    // 
    if(hovaten === ''){
        alert('Vui lòng nhập họ và tên');
        return;
    }
    //
    const checkEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!checkEmail.test(email)) {
        alert('Địa chỉ email không hợp lệ');
        return;
    }
    // 
    const user = {
        hovaten: hovaten,
        email: email,
        matkhau: matkhau
    };
    // 
    let users = JSON.parse(localStorage.getItem('users')) || [];
    // 
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        alert('Email đã tồn tại');
        return;
    }
    // 
    users.push(user);
    // 
    localStorage.setItem('users', JSON.stringify(users));
    // 
    alert('Đăng ký thành công');
    transitionToPage('Login.html');
}