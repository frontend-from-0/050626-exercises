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
      console.log('The cart is empty.');
    }
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

addItem(name, price, quantity = 1) {
    for (let i = 0; i < this.#items.length; i++) {
      const currentItem = this.#items[i];

      if (currentItem.name === name) {
        currentItem.quantity += quantity;
        return;
      }
    }
    this.#items.push({
      id: Date.now(),
      name,
      price: typeof price === 'object' ? price : { amount: price, currency: 'USD' },
      quantity,
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
    this.#items = this.#items.filter(item => item.name !== name);
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
      const currentItem = this.#items[i];
      total += currentItem.quantity * currentItem.price.amount;
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

applyDiscount(code) {
    const discountCodes = {
      SAVE10: 0.1,
      SAVE20: 0.2,
    };

    if (discountCodes[code]) {
      const discount = discountCodes[code];
      const total = this.getTotal();
      const discountedTotal = total - total * discount;
      return discountedTotal;
    } else {
      console.log('Invalid discount code');
      return this.getTotal();
    }
  } 

}

// TEST CODES
const myCart = new ShoppingCart();

myCart.viewCart();

myCart.addItem("Iphone", 1000, 1);
myCart.addItem("Laptop", 1500, 2);
myCart.addItem("Iphone", 1000, 2);

myCart.viewCart();

console.log("Total Price: $" + myCart.getTotal());
console.log("Discounted Price (SAVE10): $" + myCart.applyDiscount("SAVE10"));
console.log("Discounted Price (SAVE20): $" + myCart.applyDiscount("SAVE20"));

myCart.removeItem("Laptop");

myCart.viewCart();
console.log("New Total Price: $" + myCart.getTotal());





