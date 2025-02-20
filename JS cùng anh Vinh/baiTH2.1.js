document.addEventListener("DOMContentLoaded", function() {
    let a = parseInt(prompt("Nhập số đầu tiên: "));
    let b = parseInt(prompt("Nhập số cuối cùng: "));
    displayRange(a, b);
    sum(a, b);
    max5(a, b);
    count(a, b);
});

function displayRange(a, b) {
    let result = "";
    for (let i = a; i <= b; i++) {
        result += i + " ";
    }
    document.getElementById("result").innerText = result.trim();
}
//
function sum(a, b) {
    let total = 0;    
    for (let i = a; i <= b; i++){
        total += i;
    }
    document.getElementById("sum").innerText = total;
}
//
function max5 (a, b) {
    let max = null;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0 && i % 5 == 0) {
            if (max == null || i > max) {
                max = i;
            }
        } 
    }
    if (max != null) {
        document.getElementById("max").innerText = max;        
    } else {
        document.getElementById("max").innerText = "Không có số chia hết cho 2 và 5";
    }
}
//
function count (a, b){
    let count = 0;
    for (let i = a; i <= b; i++){
        if (i % 2 == 0 && i % 3 == 0){
            count++;
        }
    }
    document.getElementById("count").innerText = count;
}
// 
