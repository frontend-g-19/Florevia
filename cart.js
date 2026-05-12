// ================== LOCAL STORAGE ==================

// 🛒 Savatcha ma'lumotlarini saqlash uchun key
const CART_KEY = "flowerCart";

// ================== CART FUNCTIONS ==================

// 📥 LocalStorage ichidan savatchani olish
function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

// 💾 Savatchani localStorage ga saqlash
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// ================== FORMAT PRICE ==================

// 💰 Narxni chiroyli formatda chiqarish
function formatPrice(amount) {
  return amount.toLocaleString("uz-UZ") + " so'm";
}

// ================== TOAST ==================

// 🔔 Kichik notification chiqarish
function showToast(message) {
  // Toast elementini olish
  const toast = document.getElementById("toast");

  // Agar toast mavjud bo‘lmasa funksiyani to‘xtatish
  if (!toast) return;

  // Xabarni joylash
  toast.textContent = message;

  // Hidden classni olib tashlash
  toast.classList.remove("hidden");

  // Show class qo‘shish
  toast.classList.add("show");

  // Oldingi timer bo‘lsa tozalash
  if (toast._timer) {
    clearTimeout(toast._timer);
  }

  // 2.6 sekunddan keyin toastni yopish
  toast._timer = setTimeout(() => {
    // Show classni olib tashlash
    toast.classList.remove("show");

    // Hidden classni qayta qo‘shish
    toast.classList.add("hidden");
  }, 2600);
}

// ================== ADD TO CART ==================

// 🛒 Mahsulotni savatchaga qo‘shish
function addToCart(flower) {
  // 📥 Savatchani olish
  const cart = getCart();

  // 🔍 Mahsulot oldin qo‘shilganmi tekshirish
  const item = cart.find((product) => product.id === flower.id);

  if (item) {
    // ➕ Agar mavjud bo‘lsa quantity ni oshirish
    item.quantity += 1;
  } else {
    // 🆕 Yangi mahsulot qo‘shish
    cart.push({
      ...flower,
      quantity: 1,
    });
  }

  // 💾 Yangilangan savatchani saqlash
  saveCart(cart);

  // 🔔 Notification chiqarish
  showToast(`${flower.name} savatchaga qo‘shildi 🛒`);

  // 🔄 Savatchani qayta render qilish
  renderCart();
}

// ================== REMOVE CART ITEM ==================

// ❌ Savatchadan mahsulotni o‘chirish
function removeCartItem(id) {
  // 🧹 Tanlangan mahsulotni filter orqali olib tashlash
  const cart = getCart().filter((item) => item.id !== id);

  // 💾 Yangilangan savatchani saqlash
  saveCart(cart);

  // 🔔 Notification chiqarish
  showToast("Savatchadan mahsulot olib tashlandi");

  // 🔄 Savatchani qayta render qilish
  renderCart();
}

// ================== UPDATE QUANTITY ==================

// 🔄 Mahsulot sonini o‘zgartirish
function updateCartQuantity(id, delta) {
  // 📥 Savatchani olish
  const cart = getCart();

  // 🔍 Kerakli mahsulotni topish
  const item = cart.find((product) => product.id === id);

  // Agar mahsulot topilmasa
  if (!item) return;

  // ➕ yoki ➖ quantity ni o‘zgartirish
  item.quantity += delta;

  // ❌ Agar quantity 1 dan kichik bo‘lsa o‘chirish
  if (item.quantity < 1) {
    removeCartItem(id);
    return;
  }

  // 💾 Yangilangan ma'lumotni saqlash
  saveCart(cart);

  // 🔄 Savatchani yangilash
  renderCart();
}

// ================== TOTALS ==================

// 💵 Umumiy narxlarni hisoblash
function getCartTotals() {
  // 📥 Savatchani olish
  const cart = getCart();

  // 💰 Subtotal hisoblash
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // 🚚 Yetkazib berish narxi
  const delivery = cart.length ? 20000 : 0;

  // 📦 Natijani qaytarish
  return {
    subtotal,
    delivery,
    total: subtotal + delivery,
  };
}

// ================== RENDER CART ==================

// 🛒 Savatchadagi mahsulotlarni ekranga chiqarish
function renderCart() {
  // 📥 Savatchani olish
  const cart = getCart();

  // 📦 Cart items container
  const cartItems = document.getElementById("cartItems");

  // Agar container bo‘lmasa
  if (!cartItems) return;

  // 📂 Kerakli elementlar
  const cartWrapper = document.getElementById("cartWrapper");

  const emptyState = document.getElementById("emptyCartState");

  const subtotalText = document.getElementById("subtotalText");

  const deliveryText = document.getElementById("deliveryText");

  const totalText = document.getElementById("totalText");

  const checkoutBtn = document.querySelector(".checkout-btn");

  // ================== EMPTY CART ==================

  // 😴 Agar savatcha bo‘sh bo‘lsa
  if (cart.length === 0) {
    // 🧹 Cart itemlarni tozalash
    cartItems.innerHTML = "";

    // ❌ Cart wrapperni yashirish
    cartWrapper?.classList.add("hidden");

    // 👀 Empty holatni ko‘rsatish
    emptyState?.classList.remove("hidden");

    // 💰 Narxlarni 0 qilish
    subtotalText && (subtotalText.textContent = formatPrice(0));

    deliveryText && (deliveryText.textContent = formatPrice(0));

    totalText && (totalText.textContent = formatPrice(0));

    return;
  }

  // ✅ Cart mavjud bo‘lsa
  cartWrapper?.classList.remove("hidden");

  // ❌ Empty state ni yashirish
  emptyState?.classList.add("hidden");

  // 🧹 Oldingi cardlarni tozalash
  cartItems.innerHTML = "";

  // ================== CART ITEMS ==================

  // 🔄 Har bir mahsulot uchun card yaratish
  cart.forEach((item) => {
    // 📦 Card yaratish
    const card = document.createElement("div");

    // 🎨 Class berish
    card.className = "cart-item";

    // 📄 Card HTML
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />

      <div class="item-info">

        <h3>${item.name}</h3>

        <p>${formatPrice(item.price)}</p>

        <div class="quantity">

          <!-- ➖ Quantity kamaytirish -->
          <button
            class="decrease"
            aria-label="Decrease quantity"
          >
            -
          </button>

          <!-- 🔢 Quantity soni -->
          <span>${item.quantity}</span>

          <!-- ➕ Quantity oshirish -->
          <button
            class="increase"
            aria-label="Increase quantity"
          >
            +
          </button>

        </div>

      </div>

      <!-- ❌ Remove button -->
      <button
        class="remove"
        aria-label="Remove item"
      >
        <i class="ph ph-trash"></i>
      </button>
    `;

    // ➖ Quantity kamaytirish
    card.querySelector(".decrease").onclick = () =>
      updateCartQuantity(item.id, -1);

    // ➕ Quantity oshirish
    card.querySelector(".increase").onclick = () =>
      updateCartQuantity(item.id, 1);

    // ❌ Mahsulotni o‘chirish
    card.querySelector(".remove").onclick = () => removeCartItem(item.id);

    // 📥 Cardni container ichiga joylash
    cartItems.appendChild(card);
  });

  // ================== TOTALS ==================

  // 💰 Narxlarni hisoblash
  const totals = getCartTotals();

  // 📊 Narxlarni ekranga chiqarish
  subtotalText && (subtotalText.textContent = formatPrice(totals.subtotal));

  deliveryText && (deliveryText.textContent = formatPrice(totals.delivery));

  totalText && (totalText.textContent = formatPrice(totals.total));

  // ================== CHECKOUT ==================

  if (checkoutBtn) {
    // 🛍 Buyurtma tugmasi
    checkoutBtn.onclick = () => {
      // 😴 Savatcha bo‘sh bo‘lsa
      if (cart.length === 0) {
        showToast("Savatcha bo‘sh");

        return;
      }

      // ✅ Buyurtma qabul qilindi
      showToast("Buyurtmangiz qabul qilindi!");
    };
  }
}

// ================== INIT ==================

// 🚀 Sahifa yuklanganda savatchani render qilish
document.addEventListener("DOMContentLoaded", renderCart);
