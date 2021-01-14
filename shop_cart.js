let cart_price = 0;
let cart = {
    'mkop56': { 'name': 'beer', 'count': 0, price : 150 },
    'njio47': { 'name': 'vodka', 'count': 0, price : 450 },
    'bhui58': { 'name': 'chips', 'count': 0, price : 100, }
};

document.onclick = event => {
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
    }
}

const plusFunction = id => {
    cart[id]["count"]++;
    renderCart();
}

const minusFunction = id => {
    if (cart[id]["count"] - 1 == 0) {
        deleteFunction(id);
        return true;
    }
    cart[id]["count"]--;
    renderCart();
}

const deleteFunction = id => {
    delete cart[id];
    renderCart();
}

const renderCart = () => {
    console.log(cart);
}

renderCart();


function countPrice(x) {
    for (i = 0; i < cart.length; i++) {
        cart_price = cart_price + cart[i].price;
    }
    return cart_price;
}
document.write('<h2>В корзине:</h2>');
for (i = 0; i < cart.length; i++) { document.write(cart[i].name + ' — ' + cart[i].price + ' руб</br>'); }
document.write('</br><b>Стоимость заказа: ' + countPrice(cart_price) + '</b>');