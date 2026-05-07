const cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;
let html = "";

cart.forEach(item => {
  total += item.price * item.qty;

  html += `
    <div class="box">
      <p>${item.name}</p>
      <small>Rp ${item.price}</small>
      <p>Qty: ${item.qty}</p>
    </div>
  `;
});

document.getElementById("checkout-list").innerHTML = html;
document.getElementById("total").innerText = total;

function bayar() {
  alert("Pembayaran Berhasil (Simulasi)");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}