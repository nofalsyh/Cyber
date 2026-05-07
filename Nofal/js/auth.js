
function register(event) {
  if (event) event.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Semua data harus diisi!");
    return;
  }

  if (users.find(u => u.email === email)) {
    alert("Email sudah terdaftar!");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Register berhasil! Silakan Login.");
  window.location.replace("login.html");
}

// Fungsi Login
function login(event) {
  if (event) event.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  const user = users.find(u =>
    u.email === emailInput && u.password === passwordInput
  );

  if (user) {
    sessionStorage.setItem("user", JSON.stringify(user));
    alert("Login berhasil!");
    window.location.replace("index.html");
  } else {
    alert("Email atau password salah");
  }
}

// Fungsi Logout
function logout() {
  sessionStorage.removeItem("user");
  window.location.replace("login.html");
}