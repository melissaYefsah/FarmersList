// In Cart.js, create a class called Cart using the class diagram above. Cart should have the following properties and methods:
// Properties
// products: An array that will store instances of Product that have been added to the cart. Starts as an empty array.
// total: A number representing the total cost of all products in the cart. Starts with a value of 0.
// Methods
// addProduct: A method that adds a Product instance to the end of the products array and updates the total property accordingly.
// removeProduct(index): A method that removes a Product instance from the products array using the index of the specified instance of Product index and updates the total property accordingly.
// Export the class using module.exports.
// Import the class into index.js with the name Cart.
// Save and run npm test. 6 tests should now pass.

class Customer{
    constructor(name, email, shippingAddress){
        this.name = name
        this.email = email
        this.shippingAddress = shippingAddress
        this.orderHistory = []
    }

    addToOrderHistory(cart){
        this.orderHistory.push(cart)
    }
}

module.exports = Customer