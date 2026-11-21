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

/*class ShoppingCart {
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
  removeItem(name) {
    const itemExists = this.#items.find((item) => item.name === name);

    if (!itemExists) {
      console.log(`${name} is not in the cart`);
      return;
    }

    this.#items = this.#items.filter((item) => item.name !== name);
    console.log(`${name} removed from the cart`);
  }
}


const shoppingCart1 = new ShoppingCart();

shoppingCart1.viewCart();
shoppingCart1.addItem('Iphone', 100, { amount: 100000, currency: 'USD' });
shoppingCart1.addItem('Laptop', 5, {amount: 1000, currency: 'USD'});
shoppingCart1.viewCart();
shoppingCart1.removeItem('Iphone');
shoppingCart1.removeItem('Tablet');
shoppingCart1.viewCart();
*/
class ShoppingCart {
  #items;
  constructor() {
    this.#items = [];
  }
  viewCart() {
    console.log('------- Viewing the cart -------');
    if (this.#items.length > 0) {
      for (let i = 0; i < this.#items.length; i++) {
        const currentItem = this.#items[i];
        console.log(
          `Cart item ${currentItem.id}: Name ${currentItem.name} Quantity ${currentItem.quantity} Price ${currentItem.price.amount} ${currentItem.price.currency}`
        );
      }
    } else {console.log('Cart is empty');

    }
    console.log('--------------');
  }
  addItem(name, quantity, price) {
    for (let i = 0; i < this.#items.length; i++) {
      const currentItem = this.#items[i];

      if(currentItem.name === name) {
        currentItem.quantity += quantity;
        return currentItem;
      }
    }
    this.#items.push({
      id: Date.now() + Math.random(),
      name,
      quantity,
      price,
    });
  }
  removeItem(name) {
    const itemExists = this.#items.find((item) => item.name === name);

    if (!itemExists) {
      console.log(`${name} is not in the cart`);
      return;
    }

    this.#items = this.#items.filter((item) => item.name !== name);
    console.log(`${name} removed from the cart`);
  }
  getTotal() {
    let total = 0;

    for (let i =0; i < this.#items.length; i++) {
      const currentItem = this.#items[i];
      total += currentItem.quantity * currentItem.price.amount;
    }

    return total;
  }
  applyDiscount(code) {
    const discountCodes = {
      SAVE10: 10,
      SAVE20: 20,
    };
    const total = this.getTotal();
    const discountPercent = discountCodes[code];

    if (!discountPercent) {
      console.log(`${code} is not a valid discount code`);
      return total;
    }
    const discountAmount = (total * discountPercent) / 100;
    const discountedTotal = total - discountAmount;

    console.log(`${code} applied: ${discountPercent}% off`);
    return discountedTotal;
  }
}
const myCart = new ShoppingCart();

myCart.viewCart(); 

myCart.addItem('Laptop', 1, { amount:1000, currency: 'USD' });
myCart.addItem('Mouse', 2, { amount:25, currency: 'USD' });
myCart.addItem('Laptop', 2, { amount:1000, currency: 'USD' });
myCart.viewCart(); 

myCart.removeItem('Mouse');
myCart.removeItem('Tablet');
myCart.viewCart(); 
console.log('Total:', myCart.getTotal());
console.log('Total with SAVE10:', myCart.applyDiscount('SAVE10'));
console.log('Total with SAVE20:', myCart.applyDiscount('SAVE20'));
console.log('Total with FAKE50:', myCart.applyDiscount('FAKE50'));
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



