const STORAGE_KEY = "favoriteFlowers";

const favContainer = document.getElementById("favContainer");
const emptyState = document.getElementById("emptyState");

function getFavorites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveFavorites(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function removeFavorite(id) {
  const updated = getFavorites().filter((f) => f.id !== id);
  saveFavorites(updated);
  renderFavorites();
}

function renderFavorites() {
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
      <img src="${flower.image}" />
      <h3>${flower.name}</h3>
      <p>${flower.price.toLocaleString()} so'm</p>

      <div class="fav-actions">
        <button class="remove-btn">
          <i class="ph ph-trash"></i>
        </button>

        <button class="cart-btn">
          <i class="ph ph-shopping-cart"></i>
        </button>
      </div>
    `;

    card.querySelector(".remove-btn").onclick = () => {
      removeFavorite(flower.id);
    };

    favContainer.appendChild(card);
  });
}

renderFavorites();