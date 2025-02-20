document.addEventListener("DOMContentLoaded", function () {
    let n = parseInt(prompt("Nhap so n:"));
    print(n);
    sum(n);
    soNguyenTo(n);
    sum2(n);
    sum3(n);
});
// 
function print (n){
    let rs = "";
    for (let i = 1; i <= n; i++){
        rs += i + "*";
    }
    document.getElementById("print").innerHTML="Day so tu 1 -> n la: " + rs;
} 
// 
function sum (n){
    let rs = 0;
    for (let i = 1; i <= n; i++){
        if (i % 3 == 0 && i % 2 == 0){
            rs += i;
        }
    }
    document.getElementById("sum").innerHTML = "Tong cac so chan chia het cho 3 la: " + rs;
}
// 
function soNguyenTo(n){
    let rs = "";
    for (let i = 1; i <= n; i++){
        if (i == 1){
            continue;
        }
        else if (i % 2 == 0 || i % 3 == 0){
            continue;
        } else {
            rs+=i+" ";
        }
    }
    document.getElementById("soNguyenTo").innerHTML = `Cac so nguyen to tu 1 - ${n} la: ${rs}`; 
}
// 
function sum2 (n){
    let rs = 0;
    for (let i = 1; i <= n; i++){
       rs += i * (i + 1);
    }
    document.getElementById("sum2").innerHTML = `Tong 1.2 + 2.3 + ... + n.(n+1) la: ${rs}`;
    //     
}
// Cach nay se toi uu hon cach cua fn sum2
function sum3 (n){
    let rs = (n*(n+1)*(n+2))/3;
    document.getElementById("sum3").innerHTML = `Tong 1.2.3 + 2.3.4 + ... + n.(n+1).(n+2) la: ${rs}`;
}
