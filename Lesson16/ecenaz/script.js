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

  addItem(name, quantity, price) {

    for (let i = 0; i < this.#items.length; i++) {
      const currentItem = this.#items[i];
      if (currentItem.name === name) {
        currentItem.quantity += quantity;
        console.log(`Updated item: Name: ${name} New Quantity: ${currentItem.quantity}`);
        return currentItem;
      }
    }
    this.#items.push({
      id: Date.now(),
      name,
      quantity,
      price,
    });

    console.log(`Adding the new item: Name: ${name} Quantity: ${quantity} Price: ${price.amount} ${price.currency} `);
  }

  removeItem(name) {

    for (let i = 0; i < this.#items.length; i++) {
      const currentItem = this.#items[i];
      if (currentItem.name === name) {
        this.#items.splice(i, 1);
        console.log(` Name: '${name}' Removed successfully. `);
        return currentItem;
      }

      if (this.#items.length === 0) {
        console.log("Your cart is now empty.");
      }
    }
    console.warn(`Item not found: ${name}`);
  }

  getTotal(name, quantity, price) {

    let total = 0;

    for (let i = 0; i < this.#items.length; i++) {
      const currentItem = this.#items[i];

      total += currentItem.quantity * currentItem.price.amount;

    }
    console.log(`Total cost of this cart is: ${total}`);
    return total;
  }

  #discountCodes = {
    SAVE10: 10,
    SAVE20: 20,
  };

  applyDiscount(code) {

    const discountPercent = this.#discountCodes[code];


    if (discountPercent === undefined) {
      console.warn(`Invalid discount code: ${code}`);
      return this.getTotal();
    }

    const total = this.getTotal();
    console.log('Appliying the discount');

    const discountAmount = (total * discountPercent) / 100;
    const discountedTotal = total - discountAmount;

    console.log(`Discount code ${code} applied: ${discountPercent}% off`);
    console.log(`You saved: ${discountAmount}`);
    console.log(`New total: ${discountedTotal}`);
    return discountedTotal;
  }

}


const shoppingCart1 = new ShoppingCart();

shoppingCart1.viewCart();
shoppingCart1.addItem('Iphone', 100, { amount: 100000, currency: 'USD' });
shoppingCart1.addItem('Laptop', 5, { amount: 1000, currency: 'USD' });
shoppingCart1.viewCart();
shoppingCart1.removeItem('Laptop');
shoppingCart1.viewCart();
shoppingCart1.removeItem('Iphone');
shoppingCart1.viewCart();
shoppingCart1.addItem('Study Book', 5, { amount: 15, currency: 'USD' });
shoppingCart1.addItem('Tv Unit', 2, { amount: 500, currency: 'USD' });
shoppingCart1.viewCart();
shoppingCart1.getTotal();
shoppingCart1.applyDiscount('SAVE10');
shoppingCart1.viewCart();
shoppingCart1.applyDiscount('HELLO');


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



