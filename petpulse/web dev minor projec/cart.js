function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cart-container");
  let total = 0;

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty 🛒</p>";
    document.getElementById("total-price").textContent = "";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;
    container.innerHTML += `
      <div class="cart-item">
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
      </div>
    `;
  });

  document.getElementById("total-price").textContent = `Total: ₹${total}`;
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

window.onload = loadCart;
