document.addEventListener("DOMContentLoaded", function() {
    let n = 10; // Khai báo biến n và gán giá trị trực tiếp là 10

    // Tạo mảng đối tượng để lưu thông tin của sinh viên
    let sinhVien = [
        { ten: "Nguyen Van A", diemQT: 8.5, diemTHI: 9.0 },
        { ten: "Tran Thi B", diemQT: 7.0, diemTHI: 6.5 },
        { ten: "Le Van C", diemQT: 6.5, diemTHI: 7.0 },
        { ten: "Pham Thi D", diemQT: 9.0, diemTHI: 8.5 },
        { ten: "Hoang Van E", diemQT: 5.5, diemTHI: 6.0 },
        { ten: "Nguyen Thi F", diemQT: 8.0, diemTHI: 8.5 },
        { ten: "Tran Van G", diemQT: 7.5, diemTHI: 7.0 },
        { ten: "Le Thi H", diemQT: 6.0, diemTHI: 6.5 },
        { ten: "Pham Van I", diemQT: 9.5, diemTHI: 9.0 },
        { ten: "Hoang Thi J", diemQT: 8.5, diemTHI: 8.0 }
    ];

    // Tính điểm TONG
    for (let i = 0; i < n; i++) {
        sinhVien[i].diemTONG = parseFloat(((sinhVien[i].diemQT + sinhVien[i].diemTHI) / 2).toFixed(1));
    }

    // Gọi hàm để in điểm của sinh viên theo dạng bảng
    inDiemSinhVien(n, sinhVien);
    inDanhSachThiLai(n, sinhVien);
    inDanhSachXepLoaiA(n, sinhVien);
    inDanhSachHocBong(n, sinhVien);
});

function inDiemSinhVien(n, sinhVien) {
    let table = "<table border='1'><tr><th>Tên sinh viên</th><th>Điểm QT</th><th>Điểm THI</th><th>Điểm TONG</th></tr>";
    for (let i = 0; i < n; i++) {
        table += `<tr><td>${sinhVien[i].ten}</td><td>${sinhVien[i].diemQT}</td><td>${sinhVien[i].diemTHI}</td><td>${sinhVien[i].diemTONG}</td></tr>`;
    }
    table += "</table>";
    document.getElementById("diemSinhVien").innerHTML = table;
}

function inDanhSachThiLai(n, sinhVien) {
    let danhSach = "<h3>Danh sách thi lại:</h3><ul>";
    for (let i = 0; i < n; i++) {
        if (sinhVien[i].diemTONG < 5) {
            danhSach += `<li>${sinhVien[i].ten} - Điểm TONG: ${sinhVien[i].diemTONG}</li>`;
        }
    }
    danhSach += "</ul>";
    document.getElementById("danhSachThiLai").innerHTML = danhSach;
}

function inDanhSachXepLoaiA(n, sinhVien) {
    let danhSach = "<h3>Danh sách sinh viên xếp loại A:</h3><ul>";
    for (let i = 0; i < n; i++) {
        if (sinhVien[i].diemTONG >= 8.5) {
            danhSach += `<li>${sinhVien[i].ten} - Điểm TONG: ${sinhVien[i].diemTONG}</li>`;
        }
    }
    danhSach += "</ul>";
    document.getElementById("danhSachXepLoaiA").innerHTML = danhSach;
}

function inDanhSachHocBong(n, sinhVien) {
    let hocBong = [...sinhVien];
    hocBong.sort((a, b) => b.diemTONG - a.diemTONG);
    let danhSach = "<h3>Danh sách 3 sinh viên có điểm TONG cao nhất để trao học bổng:</h3><ul>";
    for (let i = 0; i < 3; i++) {
        danhSach += `<li>${hocBong[i].ten} - Điểm TONG: ${hocBong[i].diemTONG}</li>`;
    }
    danhSach += "</ul>";
    document.getElementById("danhSachHocBong").innerHTML = danhSach;
}