const products = {
  apples: {
    quantity: 1,
    price: 1,
  },
  bananas: {
    quantity: 1,
    price: 1,
  },
  bread: {
    quantity: 1,
    price: 1,
  },
  eggs: {
    quantity: 1,
    price: 1,
  },
};
const totalPriceSpan = document.getElementById('total_price');
const clearCartButton = document.getElementById('clear_cart');
for (const productName in products) {
  const addToCartButtonId = productName + '_add';
  const incrementButtonId = productName + '_increment';
  const removeFromCartButtonId = productName + '_remove';
  const decrementButtonId = productName + '_decrement';

  products[productName].addToCartButton =
    document.getElementById(addToCartButtonId);
    products[productName].incrementButton =
    document.getElementById(incrementButtonId);

    products[productName].removeFromCartButton =
    document.getElementById(removeFromCartButtonId);
    products[productName].decrementButton =
    document.getElementById(decrementButtonId);

    products[productName].quantitySpan =
    document.getElementById(productName + '_quantity');
    products[productName].cartDiv =
    document.getElementById(productName + '_cart');

  products[productName].addToCartButton
    .addEventListener('click', () => addToCart(productName));

  products[productName].incrementButton
    .addEventListener('click', () => incrementProduct(productName));

  products[productName].removeFromCartButton.addEventListener('click', () =>
    removeFromCard(productName),
  );

  products[productName].decrementButton
    .addEventListener('click', () => decrementProduct(productName));

  products[productName].quantitySpan.textContent =
    products[productName].quantity;

  updateTotal();
}

function incrementProduct(productName) {
  products[productName].decrementButton
    .removeAttribute('disabled');

  products[productName].quantity++;

  updateTotal();

  products[productName].quantitySpan.textContent = products[productName].quantity;
  saveCart();
}

function decrementProduct(productName) {
  if (products[productName].quantity >= 1) {
    if ((products[productName].quantity = 1)) {
      products[productName].decrementButton
        .setAttribute('disabled', true);
    }
    products[productName].quantity--;
    updateTotal();
    products[productName].quantitySpan.textContent = products[productName].quantity;
    saveCart();
  }
}

function removeFromCard(productName) {
  products[productName].quantity = 0;
  products[productName].cartDiv.classList.add('hidden');
  updateTotal();
  saveCart();
}

function addToCart(productName) {
  products[productName].cartDiv.classList.remove('hidden');
  incrementProduct(productName);
  updateTotal();
}

function updateTotal() {
  let total = 0;
  for (const productName in products) {
    total += products[productName].quantity * products[productName].price;
    totalPriceSpan.textContent = total;
  }
}
clearCartButton.addEventListener('click', () => {
  for (const productName in products) {
    removeFromCard(productName);
  }
});

// Only the quantities are saved: the buttons and spans inside `products` cannot be stored as JSON
function saveCart() {
  const cart = {};
  for (const productName in products) {
    cart[productName] = products[productName].quantity;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart === null) {
    return;
  }

  const cart = JSON.parse(savedCart);
  for (const productName in products) {
    const quantity = cart[productName] || 0;
    products[productName].quantity = quantity;
    products[productName].quantitySpan.textContent = quantity;
    products[productName].cartDiv.classList.toggle('hidden', quantity === 0);
  }
  updateTotal();
}

loadCart();