document.writeln("Chu vi – diện tích Hình chữ nhật!");
alert("Chu vi – diện tích Hình chữ nhật!");
//
let a = prompt("Nhập chiều dài: ");
let b = prompt("Nhập chiều rộng: ");
// 
chuVi = (parseInt(a) + parseInt(b)) * 2;
dienTich = parseInt(a) * parseInt(b);
// 
alert("Chu vi hinh chu nhat la: "+chuVi+"\nDien tich hinh chu nhat la: "+dienTich);
//
if (a > b) {
    alert("Day khong phai hinh vuong" +
        "\nChieu rong hinh chu nhat la:"+b);
} 
else if (b>a) {
    alert("Day khong phai hinh vuong" +
        "\nChieu rong hinh chu nhat la:"+a);
}
else {
    alert ("Day la hinh vuong");
}
// 
alert("Chiều rộng: " + (a > b ? b : a));
// Phương pháp B có ưu điểm hơn:
// Ngắn gọn hơn, giảm số dòng code.
// Dễ đọc với những trường hợp đơn giản.
// Thích hợp khi chỉ có một điều kiện cần kiểm tra.


