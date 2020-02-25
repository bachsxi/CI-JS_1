const model = {};
//1.Khởi tạo dữ liệu trống
model.authUser = undefined;

//2.Cập nahạt thông tin sau khi đăng nhập thành công

model.loginSuccess = (authUser) => {
    model.authUser = authUser;
}