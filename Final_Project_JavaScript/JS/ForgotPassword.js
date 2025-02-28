document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a, button").forEach(function (element) {
        element.addEventListener("click", function (event) {
            const targetUrl = this.getAttribute("href") || this.getAttribute("data-target-url");
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

function resetPassword(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('newPassword').value;
    
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.email === email) {
        user.matkhau = newPassword;
        localStorage.setItem('user', JSON.stringify(user));
        alert('Đặt lại mật khẩu thành công');
        transitionToPage('Login.html');
    } else {
        alert('Email không tồn tại');
    }
}