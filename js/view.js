const view = {};

view.setActiveScreen = screenName => {
  switch (screenName) {
    case 'register':
      document.getElementById('app').innerHTML = components.register;
      document
        .getElementById('already-have-account')
        .addEventListener('click', () => {
          view.setActiveScreen('login');
        });
      const registerForm = document.getElementById('register-form');
      registerForm.addEventListener('submit', e => {
        e.preventDefault();
        const registerInfo = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value
        };
        controller.register(registerInfo);
      });

      break;
    case 'login':
      document.getElementById('app').innerHTML = components.login;
      const loginForm = document.getElementById('login-form');
      loginForm.addEventListener('submit', e => {
        const loginInfo = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        };
        controller.login(loginInfo);
        if(!messages ===''){
          e.preventDefault()
        }
      });
      break;
  }
};

view.setError = (id,textError) => {
  let messages =[]
  messages.push(textError)
  document.getElementById(id).innerHTML =textError;
};