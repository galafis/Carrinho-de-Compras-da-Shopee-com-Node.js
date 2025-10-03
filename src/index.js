
const readline = require('readline');
const Cart = require('./cart');
const products = require('./store');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cart = new Cart();

function mainMenu() {
    console.log("\n--- Bem-vindo ao Shopee Terminal! ---");
    console.log("1 - Ver produtos");
    console.log("2 - Adicionar produto ao carrinho");
    console.log("3 - Remover produto do carrinho");
    console.log("4 - Alterar quantidade de um produto");
    console.log("5 - Ver carrinho");
    console.log("6 - Finalizar compra");
    console.log("7 - Sair\n");

    rl.question("Escolha uma opção: ", (option) => {
        switch (option) {
            case '1':
                showProducts();
                break;
            case '2':
                addToCart();
                break;
            case '3':
                removeFromCart();
                break;
            case '4':
                updateCart();
                break;
            case '5':
                cart.viewCart();
                mainMenu();
                break;
            case '6':
                finalizePurchase();
                break;
            case '7':
                console.log("Obrigado por usar o Shopee Terminal. Até logo!");
                rl.close();
                break;
            default:
                console.log("Opção inválida.");
                mainMenu();
                break;
        }
    });
}

function showProducts() {
    console.log("\nProdutos disponíveis:");
    products.forEach(product => {
        console.log(`${product.id} - ${product.name} | R$ ${product.price.toFixed(2)}`);
    });
    mainMenu();
}

function addToCart() {
    rl.question("Digite o ID do produto que deseja adicionar: ", (id) => {
        const product = products.find(p => p.id === parseInt(id));
        if (!product) {
            console.log("Produto não encontrado.");
            return mainMenu();
        }
        rl.question("Digite a quantidade: ", (qty) => {
            cart.addProduct(product, parseInt(qty));
            console.log("Produto adicionado ao carrinho!");
            mainMenu();
        });
    });
}

function removeFromCart() {
    rl.question("Digite o ID do produto que deseja remover: ", (id) => {
        cart.removeProduct(parseInt(id));
        console.log("Produto removido do carrinho.");
        mainMenu();
    });
}

function updateCart() {
    rl.question("Digite o ID do produto que deseja alterar: ", (id) => {
        rl.question("Digite a nova quantidade: ", (qty) => {
            cart.updateQuantity(parseInt(id), parseInt(qty));
            console.log("Quantidade atualizada.");
            mainMenu();
        });
    });
}

function finalizePurchase() {
    if (cart.items.length === 0) {
        console.log("Seu carrinho está vazio. Nada para comprar.");
    } else {
        console.log("\nCompra finalizada com sucesso!");
        cart.viewCart();
        cart.clearCart();
    }
    mainMenu();
}

mainMenu();
