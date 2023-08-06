
let cartCount = 0;
let giohang= new Array();

function updateCartCount() {
  let cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
}

function themvaogiohang(button) {


  let boxsp=button.parentElement.parentElement
  let tenNha = button.parentElement.parentElement.querySelector('h5').textContent;
  let anh=boxsp.querySelector('img').getAttribute('src');
  let elemet=boxsp.querySelectorAll('small span')

 let  diachi =elemet[1].textContent
  let gia=elemet[0].textContent;
  let home=new Array(tenNha,anh,diachi,gia);
    cartCount++;
    updateCartCount();
  giohang.push(home)
    console.log(giohang)


}


function showMyCart(){
    if(giohang.length==0){
        document.getElementById('showCart').innerHTML=`<div class="whole-cart-window " id="showCart"></div>`
    }else {
        let str = ` 
                             <h3>HomeStay</h3>

                             <div class="cart-wrapper" >`
        for (let i = 0; i < giohang.length; i++) {

            str += ` <div class="cart-item">
                             <img src="${giohang[i][1]}">
                             <div class="details">
                             <h6>${giohang[i][0]}</h6>

                             <span class="quantity">Time <input type="number" min="1" style="width: 40px" id="thoigian+${i}" onclick="tinhtien(${i})"> tháng</span>
                            <span class="quantity" >$<span id="gia">${giohang[i][3]}</span>/tháng </span>
                              
                             <span class="price">Tổng tiền: <span id="tongtien+${i}">0</span>$ </span>


                            </div>
                             <div class="cancel" ><i class="bi bi-x-square"></i></div>

                            </div>`


        }
        document.getElementById('showCart').innerHTML = str + `
                             </div>
                             <div class="tong" >Thanh toán : <span id="thanhtoan">0</span> $</div>
                             <div class="checkout">Đăng xuất</div>
                             <div class='donHang'>Đơn Hàng</div>`


    }

}
document.getElementById('showCart').style.display='none'
function tinhtien(i){
    let tongcu= parseInt(document.getElementById(`tongtien+${i}`).textContent)

    let gia= parseInt(giohang[i][3])
    let thoigian= parseInt(document.getElementById( `thoigian+${i}`).value)
    let tong=gia*thoigian
    document.getElementById(`tongtien+${i}`).textContent=tong

   let thanhtoan=  parseInt  (document.getElementById('thanhtoan').textContent)
    console.log(thanhtoan)
    document.getElementById('thanhtoan').textContent=tong+thanhtoan-tongcu
   //  tongthanhtoan+=tong+thanhtoan
   //  document.getElementById('thanhtoan').textContent= tongthanhtoan

}
function showcart(){
    showMyCart()
  let x=document.getElementById('showCart')
  if(x.style.display=='block'){
    x.style.display='none'
  }else {
    x.style.display='block'
  }
}