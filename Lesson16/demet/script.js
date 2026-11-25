/*
===========================================================
  SHOPPING CART APPLICATION
===========================================================
In this project, you'll create a simple Shopping Cart to
simulate adding items, removing items, calculating totals,
and applying discounts.

You'll practice:
1. Classes and objects
2. Encapsulation and abstraction
3. Methods (functions inside a class)
4. Arrays and basic array methods (push, filter, find)
5. Conditional statements (if-else)

Below is a step-by-step guide with comments explaining
each part. You can test each step by running the code in
Node.js or a browser console.
*/

/*
-----------------------------------------------------------
  STEP 1: Create the ShoppingCart Class
-----------------------------------------------------------
1. Define a `ShoppingCart` class.
2. Add a constructor that initializes an empty private 
   array `#items` to store the cart items.
3. Add a `viewCart` method to display all items in the cart.
*/



// PascalCase should be used to name classes

class ShoppingCart {
  #items;
  #discountCodes;

  constructor() {
    this.#items = [];
    this.#discountCodes = {
      SAVE10: 10,
      SAVE20: 20,
    };
  }

  viewCart() {
    console.log('------- Viewing the cart -------');
    if (this.#items.length > 0) {
      for (const item of this.#items) {
        console.log(
          `Cart item ${item.id}: Name ${item.name} Quantity ${item.quantity} Price ${item.price.amount} ${item.price.currency}`,
        );
      }
    } else {
      console.log('Cart is empty');
    }
    console.log('--------------');
  }

  addItem(name, price, quantity) {
    const existingItem = this.#items.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += quantity;
      return existingItem;
    }

    const newItem = {
      id: Date.now() + Math.random(),
      name,
      quantity,
      price,
    };
    this.#items.push(newItem);
    return newItem;
  }

  removeItem(name) {
    const exists = this.#items.some((item) => item.name === name);

    if (!exists) {
      console.log(`"${name}" sepette bulunamadı.`);
      return false;
    }

    this.#items = this.#items.filter((item) => item.name !== name);
    return true;
  }

  getTotal() {
    let total = 0;
    for (const item of this.#items) {
      total += item.price.amount * item.quantity;
    }
    return total;
  }

  applyDiscount(code) {
    const percentage = this.#discountCodes[code];
    const total = this.getTotal();

    if (percentage === undefined) {
      console.log(`"${code}" geçersiz indirim kodu.`);
      return total;
    }

    const discountedTotal = total - (total * percentage) / 100;
    console.log(`"${code}" uygulandı: %${percentage} indirim.`);
    return discountedTotal;
  }
}

const cart = new ShoppingCart();

cart.addItem('Laptop', { amount: 1000, currency: 'USD' }, 2);
cart.addItem('Iphone', { amount: 800, currency: 'USD' }, 3);
cart.addItem('Laptop', { amount: 1000, currency: 'USD' }, 1);
cart.viewCart();

console.log('Toplam:', cart.getTotal());
console.log('SAVE10 ile:', cart.applyDiscount('SAVE10'));
console.log('Geçersiz kod:', cart.applyDiscount('FAKE'));

cart.removeItem('Iphone');
cart.removeItem('Tablet');
cart.viewCart();
console.log('Yeni toplam:', cart.getTotal());

/*
-----------------------------------------------------------
  STEP 2: Add Items to the Cart
-----------------------------------------------------------
1. Create an `addItem` method in the `ShoppingCart` class.
2. The method should:
   - Accept `name`, `price`, and `quantity` as parameters.
   - Check if the item already exists in the cart.
     - If it exists, increase the quantity.
     - Otherwise, add the new item to the `#items` array.
*/

/*
-----------------------------------------------------------
  STEP 3: Remove Items from the Cart
-----------------------------------------------------------
1. Add a `removeItem` method to the `ShoppingCart` class.
2. The method should:
   - Accept the `name` of the item to remove.
   - Remove the item from the `#items` array if it exists.
*/

/*
-----------------------------------------------------------
  STEP 4: Calculate the Total Cost
-----------------------------------------------------------
1. Add a `getTotal` method to the `ShoppingCart` class.
2. The method should:
   - Calculate and return the total cost of all items in 
     the cart.
*/

/*
-----------------------------------------------------------
  STEP 5: Apply a Discount
-----------------------------------------------------------
1. Add an `applyDiscount` method to the `ShoppingCart` class.
2. The method should:
   - Accept a discount code (e.g., 'SAVE10', 'SAVE20').
   - Apply a percentage discount to the total cost if the 
     code is valid.
3. Use an object to store discount codes and their values.
*/


