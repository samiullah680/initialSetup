interface passProps {
  pass: string;
  cPass: string;
}

export const emailValidation = (email: string) => {
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email) {
    return {
      success: false,
      msg: "Please enter email address.",
    };
  } else if (!emailPattern.test(email)) {
    return {
      success: false,
      msg: "Please enter a valid email address.",
    };
  } else {
    return {
      success: true,
      msg: "success",
    };
  }
};

export const passwordValidation = (props: passProps) => {
  const passReg = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
  const { pass, cPass } = props;
  if (!pass) {
    return {
      success: false,
      msg: "Please enter password",
    };
  } else if (!cPass) {
    return {
      success: false,
      msg: "Please enter confirm password",
    };
  } else if (pass.length < 8) {
    return {
      success: false,
      msg: "Password must contain at least 8 characters.",
    };
  } else if (pass !== cPass) {
    return {
      success: false,
      msg: "Password and confirm password does not match",
    };
  } else if (!passReg.test(pass)) {
    return {
      success: false,
      msg: "Password must contain at least one digit,one upper case, one lower case, one special character",
    };
  } else {
    return {
      success: true,
      msg: "success",
    };
  }
};
export const singlePasswordValidation = (password: string) => {
  const passReg = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;

  if (!password) {
    return {
      success: false,
      msg: "Please enter password",
    };
  } else if (password.length < 8) {
    return {
      success: false,
      msg: "Password must contain at least 8 characters.",
    };
  } else if (!passReg.test(password)) {
    return {
      success: false,
      msg: "Password must contain at least one digit,one upper case, one lower case, one special character",
    };
  } else {
    return {
      success: true,
      msg: "success",
    };
  }
};

export const usernameValidation = (username: string) => {
  const usernamePattern = /^[a-zA-Z]((_|[a-zA-Z0-9])|[a-zA-Z0-9]){0,18}$/;
  if (!username) {
    return {
      success: false,
      msg: "Please enter username",
    };
  } else if (username.length < 6) {
    return {
      success: false,
      msg: "The username must contain at least 6 characters.",
    };
  } else if (!usernamePattern.test(username)) {
    return {
      success: false,
      msg: "Please ensure that the username must not contain any space or special character. Also, it cannot start with a number",
    };
  } else {
    return {
      success: true,
      msg: "success",
    };
  }
};

export const firstAndLastNameValidation = (name: string, type: string) => {
  if (type === "Last") {
    if (name.trim().length > 0 && name.trim().length < 3) {
      return {
        success: false,
        msg: `${type} name must have at least 3 characters`,
      };
    }

    return {
      success: true,
      msg: "success",
    };
  } else {
    if (!name) {
      return {
        success: false,
        msg: `Please enter ${type} name`,
      };
    } else if (name.trim().length < 3) {
      return {
        success: false,
        msg: `${type} name must have at least 3 characters`,
      };
    } else {
      return {
        success: true,
        msg: "success",
      };
    }
  }
};
