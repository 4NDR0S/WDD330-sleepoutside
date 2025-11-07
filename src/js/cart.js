import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {

  console.log("Contenido del localStorage so-cart:", getLocalStorage("so-cart"));

  const cartItems = getLocalStorage("so-cart");

  if (Array.isArray(cartItems)) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");

    // showCartTotal
    showCartTotal(cartItems);
  } else {
    // Si no es un array, muestra un mensaje o haz algo alternativo
    document.querySelector(".product-list").innerHTML =
      "<p>No items in cart</p>";
  }
}

function cartItemTemplate(item) {
  // Aseguramos que no haya "../" al inicio
  const cleanImagePath = item.Image.replace(/^(\.\.\/)+/, "");

  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="../public/${cleanImagePath}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

//funtion for total cart (TOTAL CART):
function showCartTotal(cartItems) {
  // Convertimos FinalPrice a número
  const total = cartItems.reduce((sum, item) => sum + Number(item.FinalPrice), 0);
  const formattedTotal = total.toFixed(2);

  const footer = document.querySelector(".cart-footer");
  if (footer) {
    footer.classList.remove("hide");
    footer.querySelector(".cart-total").textContent = `Total: $${formattedTotal}`;
  }
}

renderCartContents();
