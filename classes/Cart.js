class Cart {
    constructor() {
        this.products = []; 
        this.total = 0; 
    }

    addProduct(product) {
        if (product && typeof product.price === 'number' && product.price >= 0) {
            this.products.push(product);
            this.total += product.price; 
        } else {
            console.error("Invalid product");
        }
    }

    removeProduct(index) {
        if (index >= 0 && index < this.products.length) {
            const product = this.products[index];
            this.products.splice(index, 1); // Remove product from array
            this.total -= product.price; // Update total cost
        } else {
            console.error("Invalid index");
        }
    }
}

module.exports = Cart;
