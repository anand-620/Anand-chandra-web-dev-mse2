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




//cart count

// 🛒 CART FUNCTIONALITY
document.addEventListener("DOMContentLoaded", () => {
  const cartCount = document.getElementById("cartCount");

  // Initialize cart from localStorage or create new
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Update cart count display
  const updateCartCount = () => {
    if (cartCount) {
      cartCount.textContent = cart.length;
    }
  };

  updateCartCount();

  // Handle Add to Cart Buttons
  const addButtons = document.querySelectorAll(".add-to-cart");
  addButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const product = {
        name: e.target.dataset.name,
        price: e.target.dataset.price,
      };

      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      alert(`${product.name} added to cart!`);
    });
  });
});








// 🌙 Dark Mode Toggle Script
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check if user has a saved preference
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ Light Mode";
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggleButton.textContent = "☀️ Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      toggleButton.textContent = "🌙 Dark Mode";
    }
  });
});

