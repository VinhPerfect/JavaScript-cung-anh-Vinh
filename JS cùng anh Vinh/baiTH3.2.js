document.addEventListener("DOMContentLoaded", function() {
    let n = 10; // Khai báo biến n và gán giá trị trực tiếp là 10

    // Khai báo và tạo các mảng để lưu thông tin của sinh viên
    let tenSV = ["Nguyen Van A", "Tran Thi B", "Le Van C", "Pham Thi D", "Hoang Van E", "Nguyen Thi F", "Tran Van G", "Le Thi H", "Pham Van I", "Hoang Thi J"];
    let diemQT = [8.5, 7.0, 6.5, 9.0, 5.5, 8.0, 7.5, 6.0, 9.5, 8.5];
    let diemTHI = [9.0, 6.5, 7.0, 8.5, 6.0, 8.5, 7.0, 6.5, 9.0, 8.0];
    let diemTONG = [];

    // Tính điểm TONG
    for (let i = 0; i < n; i++) {
        diemTONG[i] = parseFloat(((diemQT[i] + diemTHI[i]) / 2).toFixed(1));
    }

    // Gọi hàm để in điểm của sinh viên theo dạng bảng
    inDiemSinhVien(n, tenSV, diemQT, diemTHI, diemTONG);
    inDanhSachThiLai(n, tenSV, diemTONG);
    inDanhSachXepLoaiA(n, tenSV, diemTONG);
    inDanhSachHocBong(n, tenSV, diemTONG);
});

function inDiemSinhVien(n, tenSV, diemQT, diemTHI, diemTONG) {
    let table = "<table border='1'><tr><th>Tên sinh viên</th><th>Điểm QT</th><th>Điểm THI</th><th>Điểm TONG</th></tr>";
    for (let i = 0; i < n; i++) {
        table += `<tr><td>${tenSV[i]}</td><td>${diemQT[i]}</td><td>${diemTHI[i]}</td><td>${diemTONG[i]}</td></tr>`;
    }
    table += "</table>";
    document.getElementById("diemSinhVien").innerHTML = table;
}

function inDanhSachThiLai(n, tenSV, diemTONG) {
    let danhSach = "<h3>Danh sách thi lại:</h3><ul>";
    for (let i = 0; i < n; i++) {
        if (diemTONG[i] < 5) {
            danhSach += `<li>${tenSV[i]} - Điểm TONG: ${diemTONG[i]}</li>`;
        }
    }
    danhSach += "</ul>";
    document.getElementById("danhSachThiLai").innerHTML = danhSach;
}

function inDanhSachXepLoaiA(n, tenSV, diemTONG) {
    let danhSach = "<h3>Danh sách sinh viên xếp loại A:</h3><ul>";
    for (let i = 0; i < n; i++) {
        if (diemTONG[i] >= 8.5) {
            danhSach += `<li>${tenSV[i]} - Điểm TONG: ${diemTONG[i]}</li>`;
        }
    }
    danhSach += "</ul>";
    document.getElementById("danhSachXepLoaiA").innerHTML = danhSach;
}

function inDanhSachHocBong(n, tenSV, diemTONG) {
    let hocBong = [];
    for (let i = 0; i < n; i++) {
        hocBong.push({ ten: tenSV[i], diem: diemTONG[i] });
    }
    hocBong.sort((a, b) => b.diem - a.diem);
    let danhSach = "<h3>Danh sách 3 sinh viên có điểm TONG cao nhất để trao học bổng:</h3><ul>";
    for (let i = 0; i < 3; i++) {
        danhSach += `<li>${hocBong[i].ten} - Điểm TONG: ${hocBong[i].diem}</li>`;
    }
    danhSach += "</ul>";
    document.getElementById("danhSachHocBong").innerHTML = danhSach;
}