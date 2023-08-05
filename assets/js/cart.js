let cartCount = 0;

function updateCartCount() {
  let cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
}

function themvaogiohang(button) {
  let productName = button.parentElement.parentElement.querySelector('h5').textContent;
  alert(productName);
  cartCount++;
  updateCartCount();
}