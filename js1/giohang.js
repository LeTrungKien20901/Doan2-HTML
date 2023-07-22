// quay trở lại trang trước (goBack là quay trở lại trang trước)
function goBack() {
    history.go(-1);
}
// giỏ hàng
function ThanhToan() {
    window.location.href = "thanhtoan.html";
}
var list = JSON.parse(localStorage.getItem('giohang'));
function LoadData() {
    var str = "";
    var n = 0;
    var t = 0;
    for (x of list) {
        t += x.price * x.quantity;
        str += `<tr>
                    <td>
                        <i onclick="Xoa(`+ x.id + `)" class="fa fa-trash xoasp"> Xóa</i>
                    </td>
                    <td>
                        <img class="imgsp" src="`+ x.image + `">
                    </td>
                    <td>`+ x.name + `</td>
                    <td>`+ x.price + `k</td>
                    <td> 
                        <button onclick="Tang(`+ x.id + `)" class="tanggiam"> + </button>
                    </td>    
                        <td><input id="q_`+ Number(x.id) + `" onchange="updateQuantity(` + x.id + `)" type="text" value="` + x.quantity + `" class="soluong" ></td>
                    <td>               
                        <button onclick="Giam(`+ x.id + `)" class="tanggiam"> - </button>
                    </td>
                    <td>`+ (x.price * x.quantity) + `k</td>
                </tr>
        `;
    }
    document.getElementById("listCart").innerHTML = str;
    $("#tongsp").text(t);
}
// // Xóa toàn bộ giỏ hàng
// function XoaCart() {
//     localStorage.setItem('giohang', null);
//     location.reload();
// }
function Xoa(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0) {
        list.splice(index, 1);
    }
    LoadData();
}
////  Nút Cập nhật giỏ hàng
// function updateCart() {
//     localStorage.setItem('giohang', JSON.stringify(list));
//     alert("Đã cập nhật thông tin giở hàng thành công");
// }

// Tăng sản phẩm
function Tang(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0) {
        list[index].quantity += 1;
    }
    LoadData();
}
// Giảm sản phẩm
function Giam(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && list[index].quantity >= 1) {
        list[index].quantity -= 1;
    }
    LoadData();
}
function updateQuantity(id) {
    var quantity = Number($('#q_' + id).val());
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && list[index].quantity >= 1) {
        list[index].quantity = quantity;
    }
    LoadData();
}
LoadData();