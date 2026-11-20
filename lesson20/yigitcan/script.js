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

loadCart();

const totalPriceSpan = document.getElementById('total_price');
const clearCartBtn = document.getElementById("clear_cart")

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
    .addEventListener('click', () => addToCart(productName));

  products[productName].removeFromCartButton.addEventListener('click', () =>
    removeFromCart(productName),
  );

  products[productName].decrementButton
    .addEventListener('click', () => decrementProduct(productName));

  products[productName].quantitySpan.textContent =
    products[productName].quantity;

  if (products[productName].quantity === 0) {
    products[productName].cartDiv.classList.add('hidden');
  } else {
    products[productName].cartDiv.classList.remove('hidden');
  }
}

updateTotal();


clearCartBtn.addEventListener("click", () => {
  clearCart();
});

function decrementProduct(productName) {
  if (products[productName].quantity <= 1) {
    removeFromCart(productName);
    return;
  }

  products[productName].quantity--;
  products[productName].quantitySpan.textContent = products[productName].quantity;
  updateTotal();
}

function removeFromCart(productName) {
  products[productName].quantity = 0;
  products[productName].cartDiv.classList.add('hidden');
  updateTotal();
}

function addToCart(productName) {
  products[productName].cartDiv.classList.remove('hidden');
  products[productName].quantity++;
  products[productName].quantitySpan.textContent = products[productName].quantity;
  updateTotal();
}

function updateTotal() {
  let total = 0;
  for (const productName in products) {
    total += products[productName].quantity * products[productName].price;
  }
  totalPriceSpan.textContent = total;
  saveCart();
}

function saveCart() {
  const cartQuantities = {};

  for (const productName in products) {
    cartQuantities[productName] = products[productName].quantity;
  }

  localStorage.setItem('cart', JSON.stringify(cartQuantities));
}

function loadCart() {
  const savedCart = localStorage.getItem('cart');

  if (!savedCart) {
    return;
  }

  try {
    const cartQuantities = JSON.parse(savedCart);

    if (
      cartQuantities === null ||
      typeof cartQuantities !== 'object' ||
      Array.isArray(cartQuantities)
    ) {
      return;
    }

    for (const productName in products) {
      const quantity = cartQuantities[productName];

      if (Number.isInteger(quantity) && quantity >= 0) {
        products[productName].quantity = quantity;
      }
    }
  } catch {
    console.warn('Saved cart data is invalid and was ignored.');
  }
}

function clearCart() {
  for (const productName in products) {
    products[productName].quantity = 0;
    products[productName].quantitySpan.textContent = 0;
    products[productName].cartDiv.classList.add('hidden');
  }

  updateTotal();
}
