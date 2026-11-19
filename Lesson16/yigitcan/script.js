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
  #discounts = {
    SAVE10: 0.10,
    SAVE20: 0.20,
    SAVE30: 0.30,
  };

  constructor() {
    this.#items = [
      {
        id: Date.now(),
        name: "Laptop",
        quantity: 10,
        price: {
          amount: 1000,
          currency: "USD",
        },
      },
    ];
    console.log("Shopping cart initialized.");
  }

  viewCart() {
    console.log("------- Viewing the cart -------");
    if (this.#items.length > 0) {
      for (let i = 0; i < this.#items.length; i++) {
        const currentItem = this.#items[i];
        console.log(
          `Cart item ${currentItem.id}: Name ${currentItem.name} Quantity ${currentItem.quantity} Price ${currentItem.price.amount} ${currentItem.price.currency}`,
        );
      }
    } else {
      console.log("Cart is empty");
    }

    console.log("--------------");
  }

  addItem(name, quantity, price) {
    console.log(`Adding ${quantity} ${name} to the cart.`);

    for (let i = 0; i < this.#items.length; i++) {
      const currentItem = this.#items[i];

      if (currentItem.name === name) {
        currentItem.quantity += quantity;
        console.log(
          `Updated ${name} quantity to ${currentItem.quantity}.`,
        );
        return currentItem;
      }
    }

    const newItem = {
      id: Date.now(),
      name,
      quantity,
      price,
    };
    this.#items.push(newItem);
    console.log(`Added ${name} to the cart.`);
    return newItem;
  }

  removeItem(name) {
    console.log(`Removing ${name} from the cart.`);

    for (let i = 0; i < this.#items.length; i++) {
      const currentItem = this.#items[i];

      if (currentItem.name === name) {
        this.#items.splice(i, 1);
        console.log(`Removed ${currentItem.name} from the cart.`);
        return `Removed: ${currentItem.name}`;
      }
    }

    console.log(`${name} was not found in the cart.`);
    return `${name} does not exist`;
  }

  getTotal() {
    console.log("Calculating cart total.");
    let sum = 0;

    for (let i = 0; i < this.#items.length; i++) {
      const currentItem = this.#items[i];
      sum += currentItem.price.amount * currentItem.quantity;
    }

    console.log(`Cart total: ${sum}.`);
    return sum;
  }

  applyDiscount(discountCode) {
    console.log(`Applying discount code: ${discountCode}.`);
    const discount = this.#discounts[discountCode];

    if (discount === undefined) {
      console.log(`Invalid discount code: ${discountCode}.`);
      return;
    }

    const total = this.getTotal();
    const applied = total * discount;
    const finalPrice = total - applied;
    console.log(
      `Discount applied: ${applied}  \nDiscounted Price: ${finalPrice}`,
    );
    return;
  }
}


const shoppingCart1 = new ShoppingCart();

shoppingCart1.viewCart();
shoppingCart1.addItem("Iphone", 2, { amount: 1250, currency: "USD" });
shoppingCart1.addItem("Laptop", 5, { amount: 1000, currency: "USD" });
shoppingCart1.viewCart();
console.log(shoppingCart1.removeItem("Laptop"));
console.log(shoppingCart1.removeItem("Tablet"));
shoppingCart1.viewCart();
shoppingCart1.addItem("Laptop", 5, { amount: 2000, currency: "USD" });
shoppingCart1.addItem("Tablet", 2, { amount: 500, currency: "USD" });
console.log(shoppingCart1.getTotal());
console.log(shoppingCart1.applyDiscount("SAVE30"));


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

