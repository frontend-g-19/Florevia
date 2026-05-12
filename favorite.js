// ================== LOCAL STORAGE ==================

// ❤️ Favoritelar saqlanadigan localStorage kaliti
const STORAGE_KEY = "favoriteFlowers";

// 📦 Favorite cardlar chiqadigan container
const favContainer = document.querySelector("#favContainer");

// 😴 Bo‘sh holat elementi
const emptyState = document.querySelector("#emptyState");

// ================== FAVORITE FUNCTIONS ==================

// 📥 LocalStorage ichidan favorite mahsulotlarni olish
function getFavorites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// 💾 Favoritelarni localStorage ga saqlash
function saveFavorites(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ❌ Favorite ichidan mahsulotni o‘chirish
function removeFavorite(id) {
  // 🧹 Tanlangan mahsulotdan tashqari qolganlarini olish
  const updated = getFavorites().filter((f) => f.id !== id);

  // 💾 Yangilangan listni saqlash
  saveFavorites(updated);

  // 🔄 Sahifani qayta render qilish
  renderFavorites();
}

// ================== CART ==================

// 🛒 Savatchaga mahsulot qo‘shish (cart.js dan keladi)

// ================== TOAST ==================

// 🔔 Kichik notification chiqarish (cart.js dan keladi)

// ================== RENDER FAVORITES ==================

// ❤️ Favorite mahsulotlarni ekranga chiqarish
function renderFavorites() {
  // 📥 LocalStorage dan ma’lumot olish
  const data = getFavorites();

  // 🧹 Container ichini tozalash
  favContainer.innerHTML = "";

  // 😴 Agar favorite bo‘sh bo‘lsa
  if (data.length === 0) {
    // 👀 Empty holatni ko‘rsatish
    emptyState.classList.remove("hidden");

    return;
  }

  // ❌ Empty holatni yashirish
  emptyState.classList.add("hidden");

  // 🔄 Har bir favorite mahsulot uchun card yaratish
  data.forEach((flower) => {
    // 📦 Card yaratish
    const card = document.createElement("div");

    // 🎨 Card class
    card.className = "fav-card";

    // 📄 Card HTML
    card.innerHTML = `
      <img src="${flower.image}" alt="${flower.name}" />

      <h3>${flower.name}</h3>

      <p>${flower.price.toLocaleString()} so'm</p>

      <div class="fav-actions">

        <!-- ❌ O‘chirish tugmasi -->
        <button class="remove-btn">
          <i class="ph ph-trash"></i>
        </button>

        <!-- 🛒 Savatcha tugmasi -->
        <button class="cart-btn">
          <i class="ph ph-shopping-cart"></i>
        </button>

      </div>
    `;

    // ❌ Remove button
    const removeBtn = card.querySelector(".remove-btn");

    // 🛒 Cart button
    const cartBtn = card.querySelector(".cart-btn");

    // ================== REMOVE FAVORITE ==================

    removeBtn.onclick = () => {
      // ❌ Favoritedan olib tashlash
      removeFavorite(flower.id);

      // 🔔 Xabar chiqarish
      showToast(`${flower.name} favoritlardan olib tashlandi`);
    };

    // ================== ADD TO CART ==================

    cartBtn.onclick = () => {
      // 🛒 Savatchaga qo‘shish
      addToCart(flower);
    };

    // 📥 Cardni container ichiga joylash
    favContainer.appendChild(card);
  });
}

// ================== INIT ==================

// 🚀 Sahifa ochilganda favoritelarni chiqarish
renderFavorites();