function DangNhap() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == ''|| username.length > 50) {
        alert('Tên đăng nhập không hợp lệ');
    }
    else if (password == ''|| password.length < 6) {
        alert('Mật khẩu không hợp lệ');
    }
    else if (username == 'admin' && password == 'kienhy20092001') {
        alert("Đăng nhập thành công");
        return true;
    }
    else {
        alert('Tài khoản hoặc mật khẩu không hợp lệ!');
    }
    return false;
}