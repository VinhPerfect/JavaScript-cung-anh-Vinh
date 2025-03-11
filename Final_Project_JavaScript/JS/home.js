document.addEventListener("DOMContentLoaded", function() {
    hienThiSanPham();
});

function hienThiSanPham() {
    const danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham')) || [];
    const sanPhamContainer = document.getElementById('sanPhamContainer');
    sanPhamContainer.innerHTML = '';

    danhSachSanPham.forEach(sanPham => {
        const col = document.createElement('div');
        col.className = 'col-3';
        col.innerHTML = `
            <div class="card" style="width: 100%;">
                <img src="${sanPham.hinhAnh}" class="card-img-top" alt="${sanPham.ten}">
                <div class="card-body">
                    <h5 class="card-title">${sanPham.ten}</h5>
                    <p class="card-text">${sanPham.gia}đ</p>
                    <a href="#" class="btn btn-warning text-white">Đặt hàng</a>
                </div>
            </div>
        `;
        sanPhamContainer.appendChild(col);
    });
}