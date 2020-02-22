const controller = {};
controller.login = loginInfo => {
    if(!loginInfo.email){
        // document.getElementById('email-error').innerHTML ='Email không được bỏ trống';
        view.setError('email-error','Email không được bỏ trống')
    }else{
        view.setError('email-error','')
    }
}
controller.register = registerInfo => {
    if(!registerInfo.email){
        // document.getElementById('email-error').innerHTML ='Email không được bỏ trống';
        view.setError('email-error','Email không được bỏ trống')
    }else{
        view.setError('email-error','')
    }
    if(!registerInfo.password){
        // document.getElementById('password-error').innerHTML = 'Mật khẩu không được bỏ trống'
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
    }
    

};