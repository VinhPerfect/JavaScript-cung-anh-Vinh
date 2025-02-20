document.writeln("Chương trình tính giá điện sinh hoạt!");
alert("Chương trình tính giá điện sinh hoạt!");
let soDien = prompt("Nhập số điện sử dụng của bạn (kWh): ");
let tienDien = 0;
if (soDien <= 50) {
  tienDien = soDien * 1549;
} else if (soDien <= 100) {
  tienDien = soDien * 16;
} else if (soDien <= 200) {
  tienDien = soDien * 1858;
} else if (soDien <= 300) {
  tienDien = soDien * 234;
} else if (soDien <= 300) {
  tienDien = soDien * 2615;
} else {
  tienDien = soDien * 2701;
}
alert("Số tiền điện bạn phải trả là: " + tienDien + " VND");
// Không nên sử dụng switch, vì:
// switch không hỗ trợ biểu thức điều kiện (n <= 50, n > 100,...), chỉ so sánh giá trị cố định (case 50:).
// Cần tính toán nhiều mức giá theo từng khoảng tiêu thụ, không phải chỉ kiểm tra giá trị cố định.
// Dùng if-else giúp xử lý phạm vi số (n <= 50, n > 100) một cách linh hoạt hơn.