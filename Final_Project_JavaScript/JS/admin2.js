document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.menu-bar ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // 
    if (sections.length > 0) {
        sections[0].style.display = 'block';
    }

    hienThiSanPham();
    hienThiTaiKhoan();
    loadMenu();
});

function themSanPham() {
    const tenSanPham = document.getElementById('tenSanPham').value;
    const giaSanPham = document.getElementById('giaSanPham').value;
    const hinhAnhSanPham = document.getElementById('hinhAnhSanPham').files[0];

    if (!tenSanPham || !giaSanPham || !hinhAnhSanPham) {
        alert('Vui lòng nhập đầy đủ thông tin sản phẩm');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const hinhAnhURL = e.target.result;

        const sanPham = {
            id: Date.now(),
            ten: tenSanPham,
            gia: giaSanPham,
            hinhAnh: hinhAnhURL
        };

        let danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham')) || [];
        danhSachSanPham.push(sanPham);
        localStorage.setItem('danhSachSanPham', JSON.stringify(danhSachSanPham));

        hienThiSanPham();
        document.getElementById('tenSanPham').value = '';
        document.getElementById('giaSanPham').value = '';
        document.getElementById('hinhAnhSanPham').value = '';
    };
    reader.readAsDataURL(hinhAnhSanPham);
}

function hienThiSanPham() {
    const danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham')) || [];
    const bangSanPham = document.getElementById('bangSanPham');
    bangSanPham.innerHTML = '';

    danhSachSanPham.forEach(sanPham => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${sanPham.id}</td>
            <td><img src="${sanPham.hinhAnh}" alt="${sanPham.ten}" style="max-width: 100px;"></td>
            <td>${sanPham.ten}</td>
            <td>${sanPham.gia}đ</td>
            <td>
                <button class="btn btn-warning btn-sm text-white" onclick="chinhSuaSanPham(${sanPham.id})">Chỉnh sửa</button>
                <button class="btn btn-danger btn-sm" onclick="xoaSanPham(${sanPham.id})">Xóa</button>
            </td>
        `;
        bangSanPham.appendChild(tr);
    });
}

function chinhSuaSanPham(id) {
    const danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham')) || [];
    const sanPham = danhSachSanPham.find(sp => sp.id === id);

    if (sanPham) {
        document.getElementById('suaTenSanPham').value = sanPham.ten;
        document.getElementById('suaGiaSanPham').value = sanPham.gia;
        document.getElementById('xemTruocHinhAnh').src = sanPham.hinhAnh;
        document.getElementById('xemTruocHinhAnh').style.display = 'block';

        document.getElementById('luuChinhSua').onclick = function() {
            luuChinhSua(id);
        };

        const suaModal = new bootstrap.Modal(document.getElementById('suaModal'));
        suaModal.show();
    }
}

function luuChinhSua(id) {
    const tenSanPham = document.getElementById('suaTenSanPham').value;
    const giaSanPham = document.getElementById('suaGiaSanPham').value;
    const hinhAnhSanPham = document.getElementById('suaHinhAnhSanPham').files[0];

    let danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham')) || [];
    const sanPhamIndex = danhSachSanPham.findIndex(sp => sp.id === id);

    if (sanPhamIndex !== -1) {
        if (hinhAnhSanPham) {
            const reader = new FileReader();
            reader.onload = function(e) {
                danhSachSanPham[sanPhamIndex].hinhAnh = e.target.result;
                danhSachSanPham[sanPhamIndex].ten = tenSanPham;
                danhSachSanPham[sanPhamIndex].gia = giaSanPham;
                localStorage.setItem('danhSachSanPham', JSON.stringify(danhSachSanPham));
                hienThiSanPham();
            };
            reader.readAsDataURL(hinhAnhSanPham);
        } else {
            danhSachSanPham[sanPhamIndex].ten = tenSanPham;
            danhSachSanPham[sanPhamIndex].gia = giaSanPham;
            localStorage.setItem('danhSachSanPham', JSON.stringify(danhSachSanPham));
            hienThiSanPham();
        }
    }

    const suaModal = bootstrap.Modal.getInstance(document.getElementById('suaModal'));
    suaModal.hide();
}

function xoaSanPham(id) {
    let danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham')) || [];
    danhSachSanPham = danhSachSanPham.filter(sp => sp.id !== id);
    localStorage.setItem('danhSachSanPham', JSON.stringify(danhSachSanPham));
    hienThiSanPham();
}
// 
function hienThiTaiKhoan() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const bangTaiKhoan = document.getElementById('bangTaiKhoan');
    bangTaiKhoan.innerHTML = '';

    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.hovaten}</td>
            <td>${user.email}</td>
            <td>${user.matkhau}</td>
        `;
        bangTaiKhoan.appendChild(tr);
    });
}
// menu
// ✅ Thêm sản phẩm vào menu
function themSanPhamVaoMenu() {
    const tenSanPham = document.getElementById('tenSanPhamMenu').value.trim();
    const giaSanPham = document.getElementById('giaSanPhamMenu').value.trim();
    const hinhAnhSanPham = document.getElementById('hinhAnhSanPhamMenu').files[0];

    if (!tenSanPham || !giaSanPham || !hinhAnhSanPham) {
        alert('Vui lòng nhập đầy đủ thông tin sản phẩm');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const hinhAnhURL = e.target.result;

        const sanPham = {
            id: Date.now(),
            ten: tenSanPham,
            gia: giaSanPham,
            hinhAnh: hinhAnhURL
        };

        let danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham')) || [];
        danhSachSanPham.push(sanPham);
        localStorage.setItem('danhSachSanPham', JSON.stringify(danhSachSanPham));

        hienThiMenu();
        document.getElementById('tenSanPhamMenu').value = '';
        document.getElementById('giaSanPhamMenu').value = '';
        document.getElementById('hinhAnhSanPhamMenu').value = '';
    };
    reader.readAsDataURL(hinhAnhSanPham);
}

// ✅ Hiển thị menu
function hienThiMenu() {
    const danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham')) || [];
    const bangMenu = document.getElementById('bangMenu');
    bangMenu.innerHTML = '';

    danhSachSanPham.forEach(sanPham => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${sanPham.id}</td>
            <td><img src="${sanPham.hinhAnh}" alt="${sanPham.ten}" style="max-width: 100px;"></td>
            <td>${sanPham.ten}</td>
            <td>${sanPham.gia}đ</td>
            <td>
                <button class="btn btn-warning btn-sm text-white" onclick="chinhSuaSanPhamMenu(${sanPham.id})">Chỉnh sửa</button>
                <button class="btn btn-danger btn-sm" onclick="xoaSanPhamMenu(${sanPham.id})">Xóa</button>
            </td>
        `;
        bangMenu.appendChild(tr);
    });
}

// ✅ Chỉnh sửa sản phẩm trong menu
function chinhSuaSanPhamMenu(id) {
    const danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham')) || [];
    const sanPham = danhSachSanPham.find(sp => sp.id === id);

    if (sanPham) {
        document.getElementById('suaTenSanPhamMenu').value = sanPham.ten;
        document.getElementById('suaGiaSanPhamMenu').value = sanPham.gia;
        document.getElementById('xemTruocHinhAnhMenu').src = sanPham.hinhAnh;
        document.getElementById('xemTruocHinhAnhMenu').style.display = 'block';

        document.getElementById('luuChinhSuaMenu').onclick = function () {
            luuChinhSuaMenu(id);
        };

        const suaModal = new bootstrap.Modal(document.getElementById('suaModalMenu'));
        suaModal.show();
    }
}


