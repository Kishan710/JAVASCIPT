let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  const cartList = document.getElementById('cart-list');
  const totalElement = document.getElementById('total');
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const li = document.createElement('li');
    li.innerHTML = `
      <div style="display: flex; align-items: center;">
        
        <div>${item.name} x${item.quantity}</div>
      </div>
      <div>
        $${item.price * item.quantity}
        <button onclick="removeFromCart(${index})" style="background:red; color:white; border:none; border-radius:3px; margin-left:10px;">X</button>
      </div>
    `;
    cartList.appendChild(li);
  });

  totalElement.textContent = total;
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name, price, quantity: 1, });
  }
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function checkout() {
  if (cart.length > 0) {
    alert(`Thank you for your purchase! Total: $${document.getElementById('total').textContent}`);
    cart = [];
    renderCart();
  } else {
    alert('Your cart is empty.');
  }
}

window.onload = renderCart;
