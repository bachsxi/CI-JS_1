const components = {};

components.register = `
<div class='register-container'>
<div class='form-wrapper'>
  <div class='logo'>
    <span>Techkids Chat</span>
  </div>
  <div class='form-container'>
    <form id='register-form'>
      <div class='name-wrapper'>
        <div class='input-wrapper'>
          <input class='input' type="text" name="firstName" placeholder="First name" />
          <div class="error" id ="firstName-error"></div>
        </div>

        <div class='input-wrapper'>
          <input class='input' type="text" name="lastName" placeholder="Last name" />
          <div class="error" id ="lastName-error"></div>
        </div>
      </div>
      <div class='input-wrapper'>
        <input class='input' type="email" name="email" placeholder="Email" />
        <div class="error" id ="email-error"></div>
      </div>
      <div class='input-wrapper'>
        <input class='input' type="password" name="password" placeholder="Password" />
        <div class="error" id ="password-error"></div>
        <div class="error" id ="password-error2"></div>
        <div class="error" id ="password-error3"></div>
        <div class="error" id ="password-error4"></div>
        <div class="error" id ="password-error5"></div>
        <div class="error" id ="password-error6"></div>
        
      </div>
      <div class='input-wrapper'>
        <input class='input' type="password" name="confirmPassword" placeholder="Confirm password" />
        <div class="error" id ="confirmPassword-error"></div>
      </div>

      <div class="error"" id = "form-error"></div>

      <div class='input-wrapper register-footer'>
        <a id='already-have-account'>Already have an account? Login</a>
        <button class='btn' type='submit'>
          <span>Register</span>
        </button>
      </div>
    </form>
  </div>
</div>
</div>
`;

components.login = `
<div class='login-container'>
<div class='form-wrapper'>
  <div class='form-container'>
    <div class='logo'>
      <span>Techkids Chat</span>
    </div>
    <form id='login-form' action="https://mindx.edu.vn/" method="GET"> 
      <div class='input-wrapper'>
        <input class='input' type="email" name="email" placeholder="Email" />
        <div class="error" id ="email-error"></div>
      </div>
      <div class='input-wrapper'>
        <input class='input' type="password" name="password" placeholder="Password" /></div>
        <div class="error" id ="password-error"></div>
        <button class="btn" type="submit">
          <span>Login</span>
        </button>
        <div class="error"" id = "form-error"></div>

        <input type="checkbox" checked="checked" name="remember"> 
          <span>Remember me</span>
      </div>
    </form>
  </div>
</div>
</div>
`;

//Show thông tin người dùng ở màn hình chat
components.chat = `
<div class = "chat-container">
  <div class = "header">
    MindX Chat
  </div>

  <div class="main">
    <div class = "convo-detail">
      <div id="convo-name" class="convo-header">
        Code Intensive JS
      </div>

      <div class="convo-messages" id="convo-messages"  >

      </div>

      <form name="message-form" id="message-form">
        <div class="convo-input">
          <input id="message-input" name="message" placeholder="Type your message" />
          <button class="button" tpye="submit">Send</button>
        </div>
      </form>
    </div>
  </div>

</div>
`