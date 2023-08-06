document.getElementById('showCart').style.display='none'
let cartCount = 0;
let giohang= [];

function updateCartCount() {
  let cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
}

function themvaogiohang(button) {
  console.log(button)
  let boxsp=button.parentElement.parentElement
  let tenNha = button.parentElement.parentElement.querySelector('h5').textContent;
  console.log(boxsp)
  alert(tenNha);
  cartCount++;
  updateCartCount();
}
function showcart(){
  let x=document.getElementById('showCart')
  if(x.style.display=='block'){
    x.style.display='none'
  }else {
    x.style.display='block'
  }
}