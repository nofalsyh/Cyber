let products = JSON.parse(localStorage.getItem("products")) || [];

function render() {
  let html = "";

  products.forEach((p, i) => {
    html += `
      <div class="box">
        <p>${p.name}</p>
        <small>${p.price}</small>
        <button onclick="hapus(${i})">Hapus</button>
      </div>
    `;
  });

  document.getElementById("admin-list").innerHTML = html;
}

function tambah() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;

  products.push({ name, price, category });
  localStorage.setItem("products", JSON.stringify(products));

  render();
}

function hapus(i) {
  products.splice(i, 1);
  localStorage.setItem("products", JSON.stringify(products));
  render();
}

render();