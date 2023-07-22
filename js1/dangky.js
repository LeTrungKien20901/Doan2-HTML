
// hàm Dangyy() chạy khi người dùng ấn nút đăng ký
function Dangky() {
    var username = document.getElementById("username").value;
    var email = document.getElementById('email').value;

    var password = document.getElementById("password").value;
    var r_password= document.getElementById("r_password").value;

    if (username == "" || username.length > 50) {
        alert("Tên đăng nhập không hợp lệ");
    }
    else if(email.indexOf("@") == -1) { 
        alert("Email không hợp lệ"); 
    }
    else if (password == "" || password.length < 6) {
        alert("Mật khẩu không hợp lệ");
    }
    else if (password != r_password) {
        alert("Mật khẩu không trung khớp");
    }
    else {
        alert("Đăng kí thành công!");
        return true;
    }
    return false;
}