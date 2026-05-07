function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("active");
  renderCart();
}

function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let products = JSON.parse(localStorage.getItem("products")) || [];

  let list = document.getElementById("cartList");
  let totalEl = document.getElementById("cartTotal");

  list.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    let p = products.find(x => x.id == item.id);
    if (!p) return;

    total += p.price * item.qty;

    list.innerHTML += `
        <div class="cart-item">
          <p>${p.name}</p>
          <p>Rp ${p.price}</p>
  
          <button onclick="min(${item.id})">-</button>
          ${item.qty}
          <button onclick="plus(${item.id})">+</button>
          <button onclick="hapus(${item.id})">🗑</button>
        </div>
      `;
  });

  totalEl.innerText = "Total: Rp " + total;
}

function plus(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.find(i => i.id == id).qty++;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart(); updateCartCount();
}

function min(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let item = cart.find(i => i.id == id);

  if (item.qty > 1) item.qty--;
  else cart = cart.filter(i => i.id != id);

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart(); updateCartCount();
}

function hapus(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart = cart.filter(i => i.id != id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart(); updateCartCount();
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = cart.reduce((a, b) => a + b.qty, 0);

  let count = document.getElementById("cart-count");
  if (count) count.innerText = total;
}

function openCheckout() {
  document.getElementById("checkoutModal").style.display = "flex";
  renderCheckout();
}

function closeCheckout() {
  document.getElementById("checkoutModal").style.display = "none";
}

function renderCheckout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let products = JSON.parse(localStorage.getItem("products")) || [];

  let list = document.getElementById("checkout-items");
  let totalEl = document.getElementById("checkout-total");

  list.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    let p = products.find(x => x.id == item.id);
    total += p.price * item.qty;

    list.innerHTML += `<p>${p.name} x ${item.qty} = Rp ${p.price * item.qty}</p>`;
  });

  totalEl.innerText = total;
}

function bayarSekarang() {
  alert("Pembayaran berhasil (simulasi)");
  localStorage.removeItem("cart");
  closeCheckout();
  renderCart();
  updateCartCount();
}

updateCartCount();