let cart = [];

 function addToCart(productName, price) {
   cart.push({ name: productName, price: price });
   alert(`До кошика додано: ${productName}`);
   updateCartDisplay();
   updateTotalDisplay();
 }

 function calculateTotal() {
   let total = 0;
   for (let item of cart) {
     total += item.price;
   }
   return total;
 }

 function checkout() {
   let total = calculateTotal();
   alert('Дякую за замовлення! Загальна сума: ' + total + ' грн');
 }

 function updateCartDisplay() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = ''; 

  for (let item of cart) {
    const listItem = document.createElement('p');
    listItem.textContent =`${item.name} - ${item.price} грн`;
    cartList.appendChild(listItem);
  }
}

function updateTotalDisplay() {
  const totalElement = document.getElementById('total-price');
  const total = calculateTotal();
  totalElement.textContent = total;
}

