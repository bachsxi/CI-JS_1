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
        e.preventDefault()
        const loginInfo = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        };
        controller.login(loginInfo);
      });
      break;
      case 'chat':
        document.getElementById('app').innerHTML = components.chat;
        const messageForm = document.getElementById('message-form');
        messageForm.addEventListener('submit',e =>{
          e.preventDefault();
          const newMessage =messageForm.message.value;
          //1. Thêm message vào danh sách
          controller.addMessage(newMessage);
          //2. Reset Input về bị trí ban đầu
          messageForm.message.value= '';
          const out = document.getElementById("convo-messages")
        setInterval(function() {
          const isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 100
          if (isScrolledToBottom) {
            out.scrollTop = out.scrollHeight - out.clientHeight
          }
        }, 0000)
        })
        
        break;
  }
};

// Hàm renđer ra message
view.addMessage = messageObject =>{
  //1. Tạo message container
  const messageContainer = document.createElement('div');
  //2. Thêm class cho container
  messageContainer.classList.add('message-container');
  messageContainer.classList.add(messageObject.sender);
  //3. Tạo message
  const message = document.createElement('div');
  message.classList.add('message');
  message.innerHTML = messageObject.content;

  messageContainer.appendChild(message);
  document
    .getElementById('convo-messages')
    .appendChild(messageContainer)

}



view.setError = (id,textError) => {
  document.getElementById(id).innerHTML =textError;
};

