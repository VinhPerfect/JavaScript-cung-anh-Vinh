function toggleMenu(element) {
    let submenu = element.querySelector(".submenu");
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}
// 
function scrollToProduct(productId) {
    let product = document.getElementById(productId);
    if (product) {
        product.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
// 
document.querySelectorAll('.nutDatHang').forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.card');
        const tenSanPham = card.querySelector('.card-title').textContent;
        const giaSanPham = parseFloat(card.querySelector('p').textContent.replace(/\D/g, ''));
        const hinhAnhSanPham = card.querySelector('img').src;

        // 
        document.getElementById('tenSanPham').textContent = tenSanPham;
        document.getElementById('giaSanPham').textContent = giaSanPham.toLocaleString() + " VND";
        document.getElementById('hinhAnhSanPham').src = hinhAnhSanPham;
    });
});

document.getElementById('xacNhanDatHang').addEventListener('click', function () {
    const size = document.getElementById('chonSize').value;
    const soLuong = parseInt(document.getElementById('chonSoLuong').value, 10);
    const tenSanPham = document.getElementById('tenSanPham').textContent;
    const giaSanPham = parseFloat(document.getElementById('giaSanPham').textContent.replace(/\D/g, ''));
    const hinhAnhSanPham = document.getElementById('hinhAnhSanPham').src;

    if (soLuong <= 0 || isNaN(soLuong)) {
        alert("Vui lòng chọn số lượng hợp lệ!");
        return;
    }

    const sanPham = {
        id: Date.now(),
        name: tenSanPham,
        size: size,
        price: giaSanPham,
        quantity: soLuong,
        image: hinhAnhSanPham
    };

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(sanPham);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    alert(`Bạn đã đặt ${tenSanPham}.
Sản phẩm size ${size}.
Số lượng: ${soLuong}.
Tổng cộng: ${(giaSanPham * soLuong).toLocaleString()} VND`);
});

