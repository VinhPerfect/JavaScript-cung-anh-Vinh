document.addEventListener("DOMContentLoaded", function() {
    let n = prompt("Nhap so luong sinh vien: ");
    let diemThanhPhan = [];
    let diemThi = [];
    let diemTong = [8 ,2, 6, 7, 3, 10, 4, 6, 7, 8];
    print(n, diemTong);
    DTB(n, diemTong);
    max(n, diemTong);
    CountSVThiLai(n, diemTong);
    CountSVGioi(n, diemTong);
});
//
function print(n, diemTong){
    let rs = "";
    for (let i = 0; i < n; i++){
        rs += `Diem cua sinh vien thu ${i+1} la: ${diemTong[i]}<br>`;
    }
    document.getElementById("print").innerHTML = rs;
}
// 
function DTB(n, diemTong){
    let rs = 0;
    for (let i = 0; i<n; i++){
        rs += diemTong[i];
    }  
    document.getElementById("DTB").innerHTML = `Diem tong trung binh cua ca lop la: ${rs/n}`;
}
// 
function max(n, diemTong){
    let max = diemTong[0];
    for (let i = 0; i < n; i++){
        if (diemTong[i] > max){
            max = diemTong[i];
        }
    }
    document.getElementById("max").innerHTML = `Diem cao nhat cua lop la: ${max}`;
}
// 
function CountSVThiLai (n, diemTong){
    let rs = 0;
    for (let i = 0; i<n; i++){
        if (diemTong[i] < 4){
            rs++;
        }
    }
    document.getElementById("count1").innerHTML = `So sinh vien thi lai la: ${rs}`;
}
// 
function CountSVGioi (n, diemTong){
    let rs = 0;
    for (let i = 0; i<n; i++){
        if (diemTong[i] > 8.5){
            rs++;
        }
    }
    document.getElementById("count2").innerHTML = `So sinh vien loai gioi la: ${rs}`;
}