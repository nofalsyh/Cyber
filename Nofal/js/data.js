// JANGAN HAPUS DATA SETIAP LOAD
if (!localStorage.getItem("products")) {

  const products = [
    // ===== PC =====
    { id: 1, name: "PC Gaming A", price: 8000000, category: "pc", img: "pc build.png", stock: 10 },
    { id: 2, name: "PC Gaming B", price: 8500000, category: "pc", img: "pc build.png", stock: 10 },
    { id: 3, name: "PC Gaming C", price: 9000000, category: "pc", img: "pc build.png", stock: 10 },

    // ===== MONITOR =====
    { id: 4, name: "Monitor A", price: 2000000, category: "monitor", img: "monitor 1.png", stock: 15 },
    { id: 5, name: "Monitor B", price: 2500000, category: "monitor", img: "monitor 1.png", stock: 15 },
    { id: 6, name: "Monitor C", price: 3000000, category: "monitor", img: "monitor 1.png", stock: 15 },

    // ===== CASING =====
    { id: 7, name: "Casing A", price: 700000, category: "casing", img: "casing 1.png", stock: 20 },
    { id: 8, name: "Casing B", price: 800000, category: "casing", img: "casing 1.png", stock: 20 },
    { id: 9, name: "Casing C", price: 900000, category: "casing", img: "casing 1.png", stock: 20 },

    // ===== GPU =====
    { id: 10, name: "RTX 3060", price: 5000000, category: "gpu", img: "gpu 1.png", stock: 5 },
    { id: 11, name: "RTX 3070", price: 6500000, category: "gpu", img: "gpu 1.png", stock: 5 },
    { id: 12, name: "RTX 3080", price: 8000000, category: "gpu", img: "gpu 1.png", stock: 5 },

    // ===== MOTHERBOARD =====
    { id: 13, name: "Motherboard A", price: 2500000, category: "motherboard", img: "motherboard 1.png", stock: 12 },
    { id: 14, name: "Motherboard B", price: 3000000, category: "motherboard", img: "motherboard 1.png", stock: 12 },
    { id: 15, name: "Motherboard C", price: 3500000, category: "motherboard", img: "motherboard 1.png", stock: 12 },

    // ===== COOLER =====
    { id: 16, name: "Cooler A", price: 300000, category: "cooler", img: "cooler 1.png", stock: 25 },
    { id: 17, name: "Cooler B", price: 400000, category: "cooler", img: "cooler 1.png", stock: 25 },
    { id: 18, name: "Cooler C", price: 500000, category: "cooler", img: "cooler 1.png", stock: 25 },

    // ===== KEYBOARD =====
    { id: 19, name: "Keyboard A", price: 400000, category: "keyboard", img: "keayboard 1.png", stock: 30 },
    { id: 20, name: "Keyboard B", price: 500000, category: "keyboard", img: "keayboard 1.png", stock: 30 },
    { id: 21, name: "Keyboard C", price: 600000, category: "keyboard", img: "keayboard 1.png", stock: 30 },

    // ===== CPU =====
    { id: 22, name: "Intel i5", price: 3000000, category: "cpu", img: "cpu 1.png", stock: 8 },
    { id: 23, name: "Intel i7", price: 4000000, category: "cpu", img: "cpu 1.png", stock: 8 },
    { id: 24, name: "Ryzen 5", price: 3500000, category: "cpu", img: "cpu 1.png", stock: 8 },

    // ===== STORAGE =====
    { id: 25, name: "SSD 512GB", price: 800000, category: "storage", img: "ssd 1.png", stock: 40 },
    { id: 26, name: "SSD 1TB", price: 1200000, category: "storage", img: "ssd 1.png", stock: 40 },
    { id: 27, name: "HDD 2TB", price: 900000, category: "storage", img: "ssd 1.png", stock: 40 },

    // ===== PSU =====
    { id: 28, name: "PSU 500W", price: 600000, category: "psu", img: "psu 1.png", stock: 15 },
    { id: 29, name: "PSU 650W", price: 800000, category: "psu", img: "psu 1.png", stock: 15 },
    { id: 30, name: "PSU 750W", price: 1000000, category: "psu", img: "psu 1.png", stock: 15 },
  ];

  localStorage.setItem("products", JSON.stringify(products));
}