function loadHomeAdmin() {
    let str = `<div class="buttonAdmin">
    <button type="button" class="btn btn-primary" onclick="loadHomeAdmin()">Danh sách sản phẩm </button>
    <button type="button" class="btn btn-secondary" onclick="listUser()">Danh sách người dùng</button>
    <button type="button" class="btn btn-success" onclick="listOrder()">Danh sách đơn hàng</button>
    <button type="button" class="btn btn-secondary" onclick="loadHome()">Đăng Xuất</button>
    </div>
  `
    document.getElementById('display').innerHTML = str + `<div id="main"></div>`
    listProductAdmin()
}

