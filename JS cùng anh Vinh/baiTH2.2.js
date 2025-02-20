document.addEventListener("DOMContentLoaded", function () {
  let a = parseInt(prompt("Nhập số đầu tiên: "));
  let b = parseInt(prompt("Nhập số cuối cùng: "));
  daySo(a, b);
  print(a, b);
  oddSum(a, b);
  print3(a, b);
});
//
function daySo(a, b) {
  let result = "";
  while (a <= b) {
    result += a + " ";
    a++;
  }
  document.getElementById("result").innerText =
    "Day so tren la: " + result.trim();
}
//
function print(a, b) {
  let result = "";
  while (a <= b) {
    if (a % 2 == 0) {
      result += a + " ";
    }
    a++;
  }
  document.getElementById("print").innerText =
    "Cac so chan trong day la: " + result.trim();
}
//
function oddSum(a, b) {
  let result = 0;
  while (a <= b) {
    if (a % 2 != 0) {
      result += a;
    }
    a++;
  }
  document.getElementById("oddSum").innerText =
    "Tong cac so le trong day la: " + result;
}
//
function print3(a, b) {
  let result = "";
  while (a <= b) {
    if (a % 3 == 0) {
      result += a + " ";
    }
    a++;
  }
  if (result.trim() == "") {
    document.getElementById("print3").innerText = "Không có số chia hết cho 3";
  } else {
    document.getElementById("print3").innerText =
      "Cac so chia het cho 3 la: " + result.trim();
  }
}
//
function tiepTuc (){
  if (confirm ("Ban co muon tiep tuc khong")){
    let a = parseInt(prompt("Nhập số đầu tiên: "));
    let b = parseInt(prompt("Nhập số cuối cùng: "));
    daySo(a, b);
    print(a, b);
    oddSum(a, b);
    print3(a, b);
  } else {
    alert("Thoat chuong trinh thanh cong");
  }
}
