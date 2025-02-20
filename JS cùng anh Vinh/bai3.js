alert("Chuong trinh tinh diem sinh vien");
thaiDo = prompt("Nhập diem thái độ của bạn: ");
thucHanh = prompt("Nhập điểm thực hành của bạn: ");
kiemTra = prompt("Nhập điểm kiểm tra của bạn: ");
diemQuaTrinh = (thaiDo * 0.2)+(thucHanh * 0.4)+(kiemTra * 0.4);
diemMonHoc = (diemQuaTrinh + kiemTra)/2;
let xepLoai = (diemMonHoc >= 8.5) ? "Gioi" : (diemMonHoc >= 6.5) ? "Kha" : (diemMonHoc >= 5.0) ? "Trung Binh" : "Yeu";
//
if (thaiDo < 1 && thucHanh < 1 && kiemTra < 1){
    return "Khong du dieu kien";
} 
else {
    alert("Diem qua trinh cua ban la: " + diemQuaTrinh 
        + "\nDiem mon hoc cua ban la: " + diemMonHoc);
}
