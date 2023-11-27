// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

var cart = [];
var total = 0;
let counter = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    for (p of products) {
        if (p.id === id) {
            let productInCart = { id: p.id, name: p.name, quantity: 1, price: p.price, type: p.type, offer: p.offer };
            let existsInCart = false;

            for (item of cart) {
                if (item.name === p.name) {
                    existsInCart = true;
                    item.quantity += 1;
                    break;
                }
            }
            if (!existsInCart) {
                cart.push(productInCart);
            }
        }
    }
    cartCounter();
}


// Exercise 2
function cleanCart() {
    cart = [];
    document.getElementById("cart_list").innerHTML = "";
    document.getElementById("total_price").innerHTML = "0";   
    cartCounter();
}


// Exercise 3

function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    cart = cartArrayWithSubTotal();
    for (item of cart) {
        total += item.subTotal;
    }
    return total;
}

function cartArrayWithSubTotal() {
    for (item of cart) {
        item.subTotal = item.price * item.quantity;
    }
    return cart;
}


// Exercise 4

function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    
    for (item of cart) {
        if (item.offer !== undefined && item.quantity >= item.offer.number) {
            item.subtotalWithDiscount = parseFloat(((item.price - (item.price * (item.offer.percent / 100))) * item.quantity).toFixed(2));
        }else {
            item.subtotalWithDiscount = item.price * item.quantity;      
        }
    }
}


// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    applyPromotionsCart();
    let bodyTable = document.getElementById("cart_list");
    bodyTable.innerHTML = "";

    for (item of cart) {

        let row = document.createElement("tr");

        let td = document.createElement("td");
        td.innerText = item.name;
        row.appendChild(td);

        td = document.createElement("td");
        td.innerText = `$${item.price}`;
        row.appendChild(td);

        td = document.createElement("td");
        td.innerText = item.quantity;
        row.appendChild(td);

        td = document.createElement("td");
        td.innerText = `$${item.subtotalWithDiscount || item.subTotal}`;
        row.appendChild(td);

        bodyTable.appendChild(row);

    }

    document.getElementById("total_price").innerHTML = "";
    document.getElementById("total_price").innerHTML = totalPrice();
}


let totalPrice = () => {
    let total = 0;
    for (item of cart) {
        total += (item.subtotalWithDiscount || item.subTotal);
    }
    return total;
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    
    for (item of cart) {
        if(id === item.id && item.quantity === 1) {
            let index = cart.indexOf(item);
            cart.splice(index,1);
            cartCounter();
            
        } else if(id === item.id && item.quantity > 1) {
            item.quantity = item.quantity - 1;
            cartCounter();   
        }
    }
    applyPromotionsCart();
}


function open_modal() {
    printCart();
}


 let cartCounter = () => {
    let cartQuantity = 0;
    for (item of cart) {
        cartQuantity += item.quantity;
    }
   
    document.getElementById("count_product").innerHTML = cartQuantity;
 }