const STORAGE_KEY = "favoriteFlowers";
const CART_KEY = "flowerCart";
const FLOWERS_KEY = "flowersData";

const defaultFlowers = [
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
    image: "img/qizil-atirgul.png",
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
    image: "img/oq-liliya.jpg",
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
    image: "img/pushti-pion.jpg",
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
    image: "img/bahor.png",
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
    image: "img/sariq-lola.webp",
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
    image: "img/orhideya-miks.jpg",
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
    image: "img/moviy.png",
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
    image: "img/oq-atirgul.jpg",
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
    image: "img/oq-qizil.webp",
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
    image: "img/lavanda.jpg",
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
    image: "img/qizil-lola.webp",
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
    image: "img/mix-gul.webp",
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
    image: "img/pushti-atirgul.jpg",
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
    image: "img/ekzotik.webp",
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
    image: "img/mini.jpeg",
  },
];

function getStoredFlowers() {
  return JSON.parse(localStorage.getItem(FLOWERS_KEY));
}

function saveFlowers(data) {
  localStorage.setItem(FLOWERS_KEY, JSON.stringify(data));
}

function ensureFlowerStorage() {
  if (!getStoredFlowers()) {
    saveFlowers(defaultFlowers);
  }
}

function getFlowers() {
  return getStoredFlowers() || defaultFlowers;
}

function getFavorites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveFavorites(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function formatPrice(amount) {
  return amount.toLocaleString("uz-UZ") + " so'm";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("show");
  if (toast._timer) {
    clearTimeout(toast._timer);
  }
  toast._timer = setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 2600);
}

function addToCart(flower) {
  const cart = getCart();
  const item = cart.find((product) => product.id === flower.id);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ ...flower, quantity: 1 });
  }
  saveCart(cart);
  showToast(`${flower.name} savatchaga qo‘shildi 🛒`);
  renderCart();
}

function removeCartItem(id) {
  const cart = getCart().filter((item) => item.id !== id);
  saveCart(cart);
  showToast("Savatchadan mahsulot olib tashlandi");
  renderCart();
}

function updateCartQuantity(id, delta) {
  const cart = getCart();
  const item = cart.find((product) => product.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity < 1) {
    removeCartItem(id);
    return;
  }
  saveCart(cart);
  renderCart();
}

function getCartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const delivery = cart.length ? 20000 : 0;
  return { subtotal, delivery, total: subtotal + delivery };
}

function isLiked(id) {
  return getFavorites().some((f) => f.id === id);
}

function toggleFavorite(flower) {
  let favorites = getFavorites();
  const exists = favorites.find((f) => f.id === flower.id);
  if (exists) {
    favorites = favorites.filter((f) => f.id !== flower.id);
    showToast(`${flower.name} favoritlardan olib tashlandi`);
  } else {
    favorites.push(flower);
    showToast(`${flower.name} favoritlarga qo‘shildi ❤️`);
  }
  saveFavorites(favorites);
  renderProducts(getFlowers());
  renderFavorites();
}

function renderProducts(data) {
  const productGrid = document.querySelector("#productGrid");
  if (!productGrid) return;
  productGrid.innerHTML = "";
  data.forEach((flower) => {
    const liked = isLiked(flower.id);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <span class="badge">${flower.category}</span>
      <div class="like-btn ${liked ? "active" : ""}">
        <i class="${liked ? "ph ph-heart-fill" : "ph ph-heart"}"></i>
      </div>
      <img src="${flower.image}" alt="${flower.name}" />
      <h3>${flower.name}</h3>
      <p>${flower.price.toLocaleString()} so'm</p>
      <button class="cart-btn" type="button">
        <i class="ph ph-shopping-cart"></i>
        Add to Cart
      </button>
    `;
    const likeBtn = card.querySelector(".like-btn");
    const cartBtn = card.querySelector(".cart-btn");
    likeBtn.onclick = () => toggleFavorite(flower);
    cartBtn.onclick = () => addToCart(flower);
    productGrid.appendChild(card);
  });
}

function renderFavorites() {
  const favContainer = document.querySelector("#favContainer");
  const emptyState = document.querySelector("#emptyState");
  if (!favContainer || !emptyState) return;
  const data = getFavorites();
  favContainer.innerHTML = "";
  if (data.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");
  data.forEach((flower) => {
    const card = document.createElement("div");
    card.className = "fav-card";
    card.innerHTML = `
      <img src="${flower.image}" alt="${flower.name}" />
      <h3>${flower.name}</h3>
      <p>${flower.price.toLocaleString()} so'm</p>
      <div class="fav-actions">
        <button class="remove-btn" type="button" aria-label="Remove favorite">
          <i class="ph ph-trash"></i>
        </button>
        <button class="cart-btn" type="button" aria-label="Add to cart">
          <i class="ph ph-shopping-cart"></i>
        </button>
      </div>
    `;
    const removeBtn = card.querySelector(".remove-btn");
    const cartBtn = card.querySelector(".cart-btn");
    removeBtn.onclick = () => {
      const favorites = getFavorites().filter((f) => f.id !== flower.id);
      saveFavorites(favorites);
      renderProducts(getFlowers());
      renderFavorites();
      showToast(`${flower.name} favoritlardan olib tashlandi`);
    };
    cartBtn.onclick = () => addToCart(flower);
    favContainer.appendChild(card);
  });
}

function renderCart() {
  const cartItems = document.querySelector("#cartItems");
  const cartWrapper = document.querySelector("#cartWrapper");
  const emptyCartState = document.querySelector("#emptyCartState");
  const subtotalText = document.querySelector("#subtotalText");
  const deliveryText = document.querySelector("#deliveryText");
  const totalText = document.querySelector("#totalText");
  if (
    !cartItems ||
    !cartWrapper ||
    !emptyCartState ||
    !subtotalText ||
    !deliveryText ||
    !totalText
  )
    return;
  const cart = getCart();
  if (cart.length === 0) {
    cartItems.innerHTML = "";
    cartWrapper.classList.add("hidden");
    emptyCartState.classList.remove("hidden");
    subtotalText.textContent = formatPrice(0);
    deliveryText.textContent = formatPrice(0);
    totalText.textContent = formatPrice(0);
    return;
  }
  cartWrapper.classList.remove("hidden");
  emptyCartState.classList.add("hidden");
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const card = document.createElement("div");
    card.className = "cart-item";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="item-info">
        <h3>${item.name}</h3>
        <p>${formatPrice(item.price)}</p>
        <div class="quantity">
          <button class="decrease" type="button" aria-label="Decrease quantity">-</button>
          <span>${item.quantity}</span>
          <button class="increase" type="button" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="remove" type="button" aria-label="Remove item">
        <i class="ph ph-trash"></i>
      </button>
    `;
    card.querySelector(".decrease").onclick = () =>
      updateCartQuantity(item.id, -1);
    card.querySelector(".increase").onclick = () =>
      updateCartQuantity(item.id, 1);
    card.querySelector(".remove").onclick = () => removeCartItem(item.id);
    cartItems.appendChild(card);
  });
  const totals = getCartTotals();
  subtotalText.textContent = formatPrice(totals.subtotal);
  deliveryText.textContent = formatPrice(totals.delivery);
  totalText.textContent = formatPrice(totals.total);
}

function showSection(sectionId) {
  const pageViews = document.querySelectorAll(".page-view");
  const navLinks = document.querySelectorAll(".nav-link");
  pageViews.forEach((view) =>
    view.classList.toggle("hidden", view.id !== sectionId),
  );
  navLinks.forEach((link) =>
    link.classList.toggle("active", link.dataset.section === sectionId),
  );
}

function initPageNavigation() {
  const sectionButtons = document.querySelectorAll("[data-section]");
  const menuBtn = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".close-btn");
  sectionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.dataset.section;
      if (section) {
        showSection(section);
      }
      if (sidebar && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
      }
    });
  });
  if (menuBtn && sidebar && closeBtn) {
    menuBtn.onclick = () => sidebar.classList.add("active");
    closeBtn.onclick = () => sidebar.classList.remove("active");
  }
}

function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.onclick = () => {
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");
      const category = btn.dataset.category;
      const flowers = getFlowers();
      const filtered =
        category === "All"
          ? flowers
          : flowers.filter((f) => f.category === category);
      renderProducts(filtered);
    };
  });
}

function initCheckout() {
  const checkoutBtn = document.querySelector(".checkout-btn");
  if (!checkoutBtn) return;
  checkoutBtn.onclick = () => {
    if (getCart().length === 0) {
      showToast("Savatcha bo‘sh");
      return;
    }
    showToast("Buyurtmangiz qabul qilindi!");
  };
}

document.addEventListener("DOMContentLoaded", () => {
  ensureFlowerStorage();
  renderProducts(getFlowers());
  renderFavorites();
  renderCart();
  initPageNavigation();
  initFilters();
  initCheckout();
  showSection("home");
});
