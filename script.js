function scrollToProduct(productId) {
    let product = document.getElementById(productId);
    if (product) {
        product.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
