document.addEventListener("DOMContentLoaded", function () {
    hienThiSanPham();
});

function hienThiSanPham() {
    const danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham')) || [];
    const sanPhamContainer = $("#sanPhamContainer");
    sanPhamContainer.html(""); 

    danhSachSanPham.forEach((sanPham, viTri) => {
        sanPhamContainer.append(`
            <div class="product-item">
                <div class="card">
                    <img src="${sanPham.hinhAnh}" class="card-img-top" alt="${sanPham.ten}">
                    <div class="card-body text-center">
                        <h6 class="card-title">${sanPham.ten}</h6>
                        <p class="card-text">${sanPham.gia} đ</p>
                        <a href="#" class="btn btn-warning text-white nutDatHang" data-vitri="${viTri}" data-bs-toggle="modal" data-bs-target="#modalDatHang">Đặt hàng</a>
                    </div>
                </div>
            </div>
        `);
    });
    // 
    document.querySelectorAll('.nutDatHang').forEach(nut => {
        nut.addEventListener('click', function () {
            const viTri = this.getAttribute('data-vitri');
            const sanPham = danhSachSanPham[viTri];

            document.getElementById('tieuDeModal').textContent = `Đặt hàng - ${sanPham.ten}`;
            document.getElementById('hinhAnhSanPham').src = sanPham.hinhAnh;
            document.getElementById('tenSanPham').textContent = sanPham.ten;
            document.getElementById('giaSanPham').textContent = sanPham.gia;
        });
    });
    // 
    if (!sanPhamContainer.hasClass("slick-initialized")) {
        sanPhamContainer.slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
            ]
        });
    } else {
        sanPhamContainer.slick("refresh");
    }
}
// 
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

    // 
    const sanPham = {
        id: Date.now(),
        name: tenSanPham,
        size: size,
        price: giaSanPham,
        quantity: soLuong,
        image: hinhAnhSanPham
    };

    // 
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(sanPham);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // 
    alert(`Bạn đã đặt ${tenSanPham}.
Sản phẩm size ${size}.
Số lượng: ${soLuong}.
Tổng cộng: ${(giaSanPham * soLuong).toLocaleString()} VND`);
});

