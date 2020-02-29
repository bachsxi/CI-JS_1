const controller = {};
controller.login = async loginInfo => {
    //1.Validate Form
    if(!loginInfo.email){
        view.setError('email-error','Email không được bỏ trống')
    }else{
        view.setError('email-error','')
    }
    if(!loginInfo.password){
        view.setError('password-error','Password không được bỏ trống')
    }else{
        view.setError('password-error','')
    }
    //2.Login Firebase
    if(!!loginInfo.email && !!loginInfo.password){
        try{
           //2.a Gọi hàm login firebase
            const loginResult = await firebase
            .auth()
            .signInWithEmailAndPassword(loginInfo.email,loginInfo.password);
            //2.b Kiểm tra người dùng đã xác nhận email chưa, nếu chưa thì thông báo ra
            if(!loginResult.user.emailVerified){
                view.setError('form-error','You need to verify you email!')
            }
            else{
            //2.c Lưu dữ liệu
            console.log(loginResult.user);
            model.loginSuccess({
                uid: loginResult.user.uid,
                email: loginResult.user.email
            });
            //Chuyển trang sau 2s
            setTimeout(function(){view.setActiveScreen('chat')},1000); 
        }
        }catch(error){
            console.log(error);
            //2.d Show lỗi khi đăng nhập

            view.setError('form-error',error.message)
        }
    }
}
controller.register = async registerInfo => {
    if(!registerInfo.email){
        // document.getElementById('email-error').innerHTML ='Email không được bỏ trống';
        view.setError('email-error','Email không được bỏ trống')
    }else{
        view.setError('email-error','')
    }
    if(!registerInfo.password){
        view.setError('password-error','Mật khẩu không được bỏ trống')
        view.setError('password-error2','')
        view.setError('password-error3','')
        view.setError('password-error4','')
        view.setError('password-error5','')
        view.setError('password-error6','')
        view.setError('confirmPassword-error','')
    }else{
        view.setError('password-error','')
        if(registerInfo.password.length < 6){
            view.setError('password-error2','Mật khẩu quá ngắn')
        }else{
            view.setError('password-error2','')
            }
        if(registerInfo.password.length > 12){
            view.setError('password-error3','Mật khẩu quá dài')
        }else{
            view.setError('password-error3','')
            }
        if(!registerInfo.password.match(/[A-Z]/)){
            view.setError('password-error4','Ít nhất 1 chữ viết hoa')
        }
        else{
            view.setError('password-error4','')
            }
        if(!registerInfo.password.match(/[0-9]/)){
            view.setError('password-error5','Ít nhất 1 chữ số')
        }
        else{
            view.setError('password-error5','')
            }
        if(!registerInfo.password.match(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/)){
            view.setError('password-error6','Ít nhất 1 ký tự đặc biệt')
        }
        else{
            view.setError('password-error6','')
            }
        
        if(!registerInfo.password ||
            registerInfo.confirmPassword !== registerInfo.password){
                // document.getElementById('confirmPassword-error').innerHTML = 'Mật khẩu không trùng nhau'
                view.setError('confirmPassword-error','Mật khẩu không trùng nhau')
        }else{
            view.setError('confirmPassword-error','')
        }
        if(!!registerInfo.email &&!!registerInfo.password&&registerInfo.confirmPassword&&registerInfo.confirmPassword==registerInfo.password)
        {
            //Đăng kí người dùng
            //Hàm đăng kí , truyền vào 2 tham số Email và Password
        try{
            const user = await firebase
                .auth()
                .createUserWithEmailAndPassword(
                    registerInfo.email,
                    registerInfo.password
                );
            await firebase.auth().currentUser.sendEmailVerification();
            // console.log(user);
            setTimeout(function(){view.setActiveScreen('login')},1000);
        }catch(error){
            view.setError('form-error',error.message)
            console.log(error);
        }
        }
    }
};

controller.addMessage = (newMessage) =>{
//1. Tạo message của mình 
const myMessage ={
    sender: 'you',
    content: newMessage
}
//2.Tạo message của bot
const botMessage ={
    content: newMessage,
    sender: 'bot'
}
//3. Add message của mình vào
view.addMessage(myMessage);
view.addMessage(botMessage);

};