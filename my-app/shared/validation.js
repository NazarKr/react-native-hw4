export function emailValidation(state) {
    const rjx = /[aA-zZ][@]/;
    const isValidEmail = rjx.test(state.email);
    if (!isValidEmail) {
      alert("Email must contain at least 1 numbers, 1 alphabatic and simbol @");
      return false;
    } else return true;
  }

  export function loginValidation(state) {
    const rjx = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    const isValidLogin = rjx.test(state.login);
    if (!isValidLogin) {
      alert("Login may contain only letters, apostrophe, dash and spaces.");
      return false;
    } else {
      return true;
    }
  }

  export function passwordValidation(state) {
    const rjx = /[0-9]{6}/;
    const isValidPassword = rjx.test(state.password);
    if (!isValidPassword) {
      alert(
        "Password may contain only numbers. Password length must consist minimum 6 caracters! "
      );
      return false;
    } else {
      return true;
    }
  }
