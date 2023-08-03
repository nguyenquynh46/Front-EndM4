function listProductUser(){
    loadList();
    document.getElementById('home').innerHTML= `  <div class="navbar-nav mr-auto py-0" >
                            
                                <button onclick="loadHomeUser()" type="button" style="color: #F1F8FF ;background: #0F172B" >Trang Chủ</button>
                                 
                                <button onclick="loadListUser()" type="button" style="color: #F1F8FF ;background: #0F172B" >Sản Phẩm </button>
                                <button onclick=""  type="button" style="color: #F1F8FF ;background: #0F172B">Tên người dùng</button>
                              
                                <div class="nav-item dropdown">
                                    <button type="button" style="color: #F1F8FF ;background: #0F172B" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Sắp Xếp </button>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <button onclick="" class="dropdown-item">Tăng Dần </button>
                                        <button onclick="" class="dropdown-item">Giảm Dần</button>
                                      
                                    </div>
                                </div>
                                <button type="button" style="color: #F1F8FF ;background: #0F172B" onclick="loadHome()">Đăng Xuất</button>
                            </div>`
                            




}
