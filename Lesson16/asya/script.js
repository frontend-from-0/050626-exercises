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

  constructor() {
    this.#items = [
      {
        id: Date.now(),
        name: 'Laptop',
        quantity: 10,
        price: {
          amount: 1000,
          currency: 'USD',
        },
      },
    ];
  }

  viewCart() {
    console.log('------- Viewing the cart -------');
    if (this.#items.length > 0) {
      for (let i = 0; i < this.#items.length; i++) {
        const currentItem = this.#items[i];
        console.log(
          `Cart item ${currentItem.id}: Name ${currentItem.name} Quantity ${currentItem.quantity} Price ${currentItem.price.amount} ${currentItem.price.currency}`,
        );
      }
    } else {
      console.log('Cart is empty');
    }

    console.log('--------------');
  }

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

  addItem(name, quantity, price) {
    for (let i = 0; i < this.#items.length; i++) {
      const currentItem = this.#items[i];

      if (currentItem.name === name) {
        currentItem.quantity += quantity;
        return currentItem;
      }
    }
    this.#items.push({
      id: Date.now(),
      name,
      quantity,
      price,
    });
  }

  /*
-----------------------------------------------------------
  STEP 3: Remove Items from the Cart
-----------------------------------------------------------
1. Add a `removeItem` method to the `ShoppingCart` class.
2. The method should:
   - Accept the `name` of the item to remove.
   - Remove the item from the `#items` array if it exists.
*/

  removeItem(name) {
    this.#items = this.#items.filter((item) => item.name !== name);
  }

  /*
-----------------------------------------------------------
  STEP 4: Calculate the Total Cost
-----------------------------------------------------------
1. Add a `getTotal` method to the `ShoppingCart` class.
2. The method should:
   - Calculate and return the total cost of all items in 
     the cart.
*/

  getTotal() {
    let total = 0;
    for (let i = 0; i < this.#items.length; i++) {
      const item = this.#items[i];
      total += item.price.amount * item.quantity;
    }
    return total;
  }

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

  applyDiscount(discountCode) {
    const discountCodes = {
      SAVE10: 10,
      SAVE20: 20,
      SAVE50: 50,
    };

    const currentTotal = this.getTotal();

    if (discountCodes[discountCode]) {
      const percentage = discountCodes[discountCode];
      return currentTotal - currentTotal * (percentage / 100);
    } else {
      return currentTotal;
    }
  }
}

const shoppingCart1 = new ShoppingCart();

shoppingCart1.viewCart();
shoppingCart1.addItem('Iphone', 100, { amount: 100000, currency: 'USD' });
shoppingCart1.addItem('Laptop', 5, { amount: 1000, currency: 'USD' });
shoppingCart1.viewCart();

// --- Testing STEP 3, 4, 5 ---

console.log('Total:', shoppingCart1.getTotal());
console.log('With SAVE10:', shoppingCart1.applyDiscount('SAVE10'));
console.log('With SAVE50:', shoppingCart1.applyDiscount('SAVE50'));
console.log('Invalid code:', shoppingCart1.applyDiscount('BLABLA'));

shoppingCart1.removeItem('Laptop');
shoppingCart1.viewCart();
