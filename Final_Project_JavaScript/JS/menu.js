function toggleMenu(element) {
    let submenu = element.querySelector(".submenu");
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}
// 
function scrollToProduct(productId) {
    let product = document.getElementById(productId);
    if (product) {
        product.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
