document.addEventListener("DOMContentLoaded", function () {
  hienThiSanPham();
});

function hienThiSanPham() {
  let danhSachSanPham = JSON.parse(localStorage.getItem('cartItems')) || [];
  const sanPhamContainer = document.getElementById("thongTinSanPham");
  sanPhamContainer.innerHTML = "";
  let tongTien = 0;

  let sanPhamGop = {};
  danhSachSanPham.forEach(sanPham => {
      let key = `${sanPham.name}-${sanPham.size}`;
      if (sanPhamGop[key]) {
          sanPhamGop[key].quantity += sanPham.quantity;
          sanPhamGop[key].totalPrice += sanPham.price * sanPham.quantity;
      } else {
          sanPhamGop[key] = { ...sanPham, totalPrice: sanPham.price * sanPham.quantity };
      }
  });

  let sanPhamArray = Object.values(sanPhamGop);
  sanPhamArray.forEach((sanPham, viTri) => {
      tongTien += sanPham.totalPrice;

      sanPhamContainer.innerHTML += `
          <tr>
              <td><img src="${sanPham.image}" class="product-img-small" alt="${sanPham.name}" style="width: 50px; height: 50px;"></td>
              <td>${sanPham.name}</td>
              <td>${sanPham.price.toLocaleString()} VND</td>
              <td><input type="number" class="form-control" id="quantity${viTri}" value="${sanPham.quantity}" min="1" onchange="capNhatSanPham(${viTri})"></td>
              <td><input type="text" class="form-control" id="size${viTri}" value="${sanPham.size}" onchange="capNhatSanPham(${viTri})"></td>
              <td id="totalPrice${viTri}">${sanPham.totalPrice.toLocaleString()} đ</td>
              <td><input type="text" class="form-control" id="ghiChu${viTri}" placeholder="Nhập ghi chú" onchange="capNhatGhiChu(${viTri})"></td>
              <td>      
                  <span class="icon-delete" onclick="xoaSanPham(${viTri})" style="cursor: pointer; color: #dc3545; font-size: 18px;">🗑️</span>
              </td>
          </tr>
      `;
  });

  document.getElementById("tongTien").textContent = `Tổng tiền: ${tongTien.toLocaleString()} VND`;
}

// ✅ Cập nhật số lượng và size sản phẩm
function capNhatSanPham(index) {
  let danhSachSanPham = JSON.parse(localStorage.getItem('cartItems')) || [];
  let quantityInput = document.getElementById(`quantity${index}`);
  let sizeInput = document.getElementById(`size${index}`);

  let newQuantity = parseInt(quantityInput.value);
  let newSize = sizeInput.value.trim();

  if (newQuantity < 1) {
      newQuantity = 1;
      quantityInput.value = 1;
  }

  danhSachSanPham[index].quantity = newQuantity;
  danhSachSanPham[index].size = newSize;
  danhSachSanPham[index].totalPrice = danhSachSanPham[index].price * newQuantity;

  localStorage.setItem('cartItems', JSON.stringify(danhSachSanPham));
  hienThiSanPham();
}

// ✅ Cập nhật ghi chú
function capNhatGhiChu(index) {
  let danhSachSanPham = JSON.parse(localStorage.getItem('cartItems')) || [];
  let ghiChuInput = document.getElementById(`ghiChu${index}`).value.trim();

  danhSachSanPham[index].note = ghiChuInput;

  localStorage.setItem('cartItems', JSON.stringify(danhSachSanPham));
}

// ✅ Xóa sản phẩm
function xoaSanPham(index) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.splice(index, 1);  // ❌ Sửa lỗi delete ❌
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  hienThiSanPham();
}
