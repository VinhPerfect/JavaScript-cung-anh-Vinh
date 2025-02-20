// Biến lưu giá trị đang nhập
let currentInput = "  ";

// Lấy phần hiển thị
const display = document.getElementById('display');

// Thêm giá trị vào màn hình
function appendValue(value) {
  if (currentInput === "0" || currentInput === "Error") {
    currentInput = value; // Thay thế giá trị 0 nếu nhập số mới
  } else {
    currentInput += value; // Chuỗi hóa giá trị nhập
  }
  display.innerText = currentInput;
}

// Tính toán
function calculate() {
  try {
    // Eval không an toàn nếu không kiểm soát → dùng thư viện math.js nếu phức tạp hơn
    currentInput = eval(currentInput).toString();
    display.innerText = currentInput;
  } catch (error) {
    currentInput = "Error";
    display.innerText = currentInput;
  }
}

// Xóa màn hình
function clearDisplay() {
  currentInput = "0";
  display.innerText = currentInput;
}

