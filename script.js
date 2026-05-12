// ================== DATA ==================
// 🌸 Mahsulotlar ro‘yxati
const flowers = [
  {
    id: 1,
    name: "Qizil Atirgul Buketi",
    description:
      "Sevgi va ehtiros ramzi bo‘lgan nafis qizil atirgullar to‘plami.",
    category: "Romantik",
    price: 150000,
    rating: 4.9,
    count: 120,
    colors: ["qizil"],
    image: "/img/qizil-atirgul.png",
  },
  {
    id: 2,
    name: "Oq Liliya Guldastasi",
    description: "Tozalik va poklikni ifodalovchi nafis oq liliyalar.",
    category: "Elegant",
    price: 180000,
    rating: 4.8,
    count: 85,
    colors: ["oq"],
    image: "/img/oq-liliya.jpg",
  },
  {
    id: 3,
    name: "Pushti Pionlar",
    description: "Nozik va romantik kayfiyat beruvchi pushti pion gullari.",
    category: "Premium",
    price: 210000,
    rating: 5.0,
    count: 60,
    colors: ["pushti"],
    image: "/img/pushti-pion.jpg",
  },
  {
    id: 4,
    name: "Aralash Bahor Guldastasi",
    description:
      "Bahorning eng chiroyli gullaridan tuzilgan rang-barang buket.",
    category: "Universal",
    price: 130000,
    rating: 4.7,
    count: 140,
    colors: ["qizil", "sariq", "pushti"],
    image: "/img/bahor.png",
  },
  {
    id: 5,
    name: "Sariq Lola Buketi",
    description: "Quvonch va iliqlik ulashuvchi yorqin sariq lolalar.",
    category: "Do‘stlik",
    price: 110000,
    rating: 4.6,
    count: 95,
    colors: ["sariq"],
    image: "/img/sariq-lola.webp",
  },
  {
    id: 6,
    name: "Orxideya Premium",
    description: "Hashamatli va eksklyuziv ko‘rinishga ega orxideya guli.",
    category: "Luxury",
    price: 250000,
    rating: 5.0,
    count: 40,
    colors: ["oq", "pushti"],
    image: "/img/orhideya-miks.jpg",
  },
  {
    id: 7,
    name: "Moviy Gortenziya",
    description: "Noyob va jozibali moviy rangdagi gortenziya gullari.",
    category: "Premium",
    price: 190000,
    rating: 4.8,
    count: 70,
    colors: ["moviy"],
    image: "/img/moviy.png",
  },
  {
    id: 8,
    name: "Oq Atirgul Buketi",
    description: "Poklik va hurmat ramzi bo‘lgan oq atirgullar.",
    category: "Elegant",
    price: 140000,
    rating: 4.7,
    count: 110,
    colors: ["oq"],
    image: "/img/oq-atirgul.jpg",
  },
  {
    id: 9,
    name: "Qizil va Oq Aralash Buket",
    description: "Sevgi va hurmatni ifodalovchi aralash atirgullar.",
    category: "Romantik",
    price: 170000,
    rating: 4.9,
    count: 90,
    colors: ["qizil", "oq"],
    image: "/img/oq-qizil.webp",
  },
  {
    id: 10,
    name: "Lavanda Guldastasi",
    description: "Tinchlantiruvchi hidga ega lavanda gullari.",
    category: "Relax",
    price: 160000,
    rating: 4.6,
    count: 75,
    colors: ["binafsha"],
    image: "/img/lavanda.jpg",
  },
  {
    id: 11,
    name: "Qizil Lola",
    description: "Sevgi va bahorni ifodalovchi qizil lolalar.",
    category: "Romantik",
    price: 120000,
    rating: 4.7,
    count: 100,
    colors: ["qizil"],
    image: "/img/qizil-lola.webp",
  },
  {
    id: 12,
    name: "Sariq va Oq Mix Buket",
    description: "Quvonch va poklikni birlashtirgan rangli buket.",
    category: "Universal",
    price: 135000,
    rating: 4.5,
    count: 130,
    colors: ["sariq", "oq"],
    image: "/img/mix-gul.webp",
  },
  {
    id: 13,
    name: "Pushti Atirgul Buketi",
    description: "Nozik his-tuyg‘ularni ifodalovchi pushti atirgullar.",
    category: "Romantik",
    price: 155000,
    rating: 4.8,
    count: 105,
    colors: ["pushti"],
    image: "/img/pushti-atirgul.jpg",
  },
  {
    id: 14,
    name: "Ekzotik Gullar To‘plami",
    description: "Noyob va tropik gullardan iborat maxsus buket.",
    category: "Luxury",
    price: 270000,
    rating: 5.0,
    count: 35,
    colors: ["qizil", "yashil", "sariq"],
    image: "/img/ekzotik.webp",
  },
  {
    id: 15,
    name: "Mini Guldasta",
    description: "Kichik, ammo juda chiroyli sovg‘a uchun mos buket.",
    category: "Budget",
    price: 90000,
    rating: 4.4,
    count: 150,
    colors: ["pushti", "oq"],
    image: "/img/mini.jpeg",
  },
];

// ================== ELEMENTLAR ==================

// 🍔 Menu tugmasi
const menuBtn = document.querySelector(".menu-toggle");

// 📂 Sidebar elementi
const sidebar = document.querySelector(".sidebar");

// ❌ Sidebar yopish tugmasi
const closeBtn = document.querySelector(".close-btn");

// 🛍 Mahsulotlar chiqadigan container
const productGrid = document.querySelector("#productGrid");

// 🎯 Filter tugmalari
const filterBtns = document.querySelectorAll(".filter-btn");

// 📌 Hozirgi tanlangan kategoriya
let currentCategory = "All";

// ================== SIDEBAR ==================

// 📂 Sidebarni ochish
menuBtn.onclick = () => {
  sidebar.classList.add("active");
};

// ❌ Sidebarni yopish
closeBtn.onclick = () => {
  sidebar.classList.remove("active");
};

// ================== LOCAL STORAGE ==================

// ❤️ Favorite mahsulotlar uchun localStorage kaliti
const STORAGE_KEY = "favoriteFlowers";

// 📥 LocalStorage ichidan favorite mahsulotlarni olish
function getFavorites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// 💾 Favorite mahsulotlarni saqlash
function saveFavorites(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ❤️ Favorite holatini o‘zgartirish
function toggleFavorite(flower) {
  let favorites = getFavorites();

  // Mahsulot oldin like qilinganmi tekshiramiz
  const exists = favorites.find((f) => f.id === flower.id);

  if (exists) {
    // ❌ Agar mavjud bo‘lsa olib tashlaymiz
    favorites = favorites.filter((f) => f.id !== flower.id);
  } else {
    // ✅ Aks holda qo‘shamiz
    favorites.push(flower);
  }

  // 💾 Yangilangan ma’lumotni saqlaymiz
  saveFavorites(favorites);
}

// 🔍 Mahsulot like qilinganmi tekshiradi
function isLiked(id) {
  return getFavorites().some((f) => f.id === id);
}

// ================== CART ==================

// 🛒 Savatchaga mahsulot qo‘shish (cart.js dan keladi)

// ================== RENDER ==================

// 🖼 Mahsulotlarni ekranga chiqarish funksiyasi
function renderProducts(data) {
  // Eski cardlarni tozalash
  productGrid.innerHTML = "";

  // Har bir mahsulot uchun card yaratamiz
  data.forEach((flower) => {
    // ❤️ Like holatini tekshiramiz
    const liked = isLiked(flower.id);

    // 📦 Card yaratish
    const card = document.createElement("div");

    // Card class qo‘shish
    card.className = "card";

    // ❤️ Icon class tanlash
    const iconClass = liked ? "ph ph-heart-fill" : "ph ph-heart";

    // 📄 Card HTML
    card.innerHTML = `
      <span class="badge">${flower.category}</span>

      <div class="like-btn ${liked ? "active" : ""}">
        <i class="${iconClass}"></i>
      </div>

      <img src="${flower.image}" alt="${flower.name}" />

      <h3>${flower.name}</h3>

      <p>${flower.price.toLocaleString()} so'm</p>

      <button class="cart-btn">
        <i class="ph ph-shopping-cart"></i>
        Add to Cart
      </button>
    `;

    // ❤️ Like tugmasi
    const likeBtn = card.querySelector(".like-btn");

    // ❤️ Icon elementi
    const icon = likeBtn.querySelector("i");

    // 🛒 Cart tugmasi
    const cartBtn = card.querySelector(".cart-btn");

    // ================== LIKE ==================

    likeBtn.onclick = () => {
      // ❤️ Favorite holatini o‘zgartiramiz
      toggleFavorite(flower);

      // 🔄 Yangilangan holatni olamiz
      const nowLiked = isLiked(flower.id);

      // ❤️ Icon almashtirish
      icon.className = nowLiked ? "ph ph-heart-fill" : "ph ph-heart";

      // 🎨 Active class qo‘shish yoki olib tashlash
      likeBtn.classList.toggle("active", nowLiked);
    };

    // ================== CART ==================

    cartBtn.onclick = () => {
      addToCart(flower);
    };

    // 📥 Cardni productGrid ichiga joylash
    productGrid.appendChild(card);
  });
}

// ================== FILTER ==================

// 🎯 Filter tugmalariga event qo‘shish
filterBtns.forEach((btn) => {
  btn.onclick = () => {
    // ❌ Oldingi active classni olib tashlash
    document.querySelector(".filter-btn.active").classList.remove("active");

    // ✅ Yangi tugmaga active class qo‘shish
    btn.classList.add("active");

    // 📌 Tanlangan kategoriyani olish
    currentCategory = btn.dataset.category;

    // 🔍 Filter qilish
    const filtered =
      currentCategory === "All"
        ? flowers
        : flowers.filter((f) => f.category === currentCategory);

    // 🖼 Filterlangan mahsulotlarni chiqarish
    renderProducts(filtered);
  };
});

// ================== INIT ==================

// 🚀 Sahifa ochilganda barcha mahsulotlarni chiqarish
renderProducts(flowers);
