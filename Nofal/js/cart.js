
function flyToCart(imgElement) {
    const cart = document.querySelector(".cart-icon");
    const img = imgElement.cloneNode(true);

    const rect = imgElement.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

    img.classList.add("fly-img");
    img.style.top = rect.top + "px";
    img.style.left = rect.left + "px";

    document.body.appendChild(img);

    setTimeout(() => {
        img.style.top = cartRect.top + "px";
        img.style.left = cartRect.left + "px";
        img.style.opacity = "0";
        img.style.transform = "scale(0.2)";
    }, 10);

    setTimeout(() => {
        img.remove();
    }, 800);
}

function addToCart(product, imgElement) {
    flyToCart(imgElement);
    // logic cart kamu tetap
}
