
class Cart {
    constructor() {
        this.items = [];
    }

    addProduct(product, quantity) {
        const existing = this.items.find(item => item.product.id === product.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    removeProduct(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.product.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeProduct(productId);
            } else {
                item.quantity = quantity;
            }
        }
    }

    viewCart() {
        if (this.items.length === 0) {
            console.log("\nSeu carrinho está vazio.\n");
            return;
        }

        console.log("\nItens no Carrinho:");
        this.items.forEach((item, index) => {
            const subtotal = item.product.price * item.quantity;
            console.log(`${index + 1} - ${item.product.name} | R$ ${item.product.price.toFixed(2)} x ${item.quantity} = R$ ${subtotal.toFixed(2)}`);
        });

        console.log(`\nTotal: R$ ${this.getTotal().toFixed(2)}\n`);
    }

    getTotal() {
        return this.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    }

    clearCart() {
        this.items = [];
    }
}

module.exports = Cart;
