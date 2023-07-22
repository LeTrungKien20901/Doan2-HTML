function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == ''|| username !="admin") {
        alert('Tên đăng nhập không hợp lệ');
    }
    else if (password == '' ||password !="12345678") {
        alert('Mật khẩu không hợp lệ');
    }
    else if (username == 'admin' && password == '12345678') {
        return true;
    }
    else {
        alert('Tài khoản hoặc mật khẩu không hợp lệ!');
    }
    return false;
}