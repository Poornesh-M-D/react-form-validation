import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailValidated, setEmailValidated] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordValidated, setPasswordValidated] = useState(false);

  const [confirmpassword, setConfirmPassword] = useState("");
  const [confirmpasswordValidated, setConfirmPasswordValidated] =
    useState(false);

  function validateEmail(email) {
    let index_of_at = email.indexOf("@");
    let index_of_dot = email.lastIndexOf(".");
    return index_of_at > 0 && index_of_dot && index_of_dot > index_of_at;
  }

  function validatePassword(password) {
    return password.length >= 8;
  }

  function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
  }

  function handleEmailChange(e) {
    let email_value = e.target.value;
    setEmail(email_value);
    setEmailValidated(validateEmail(email_value));
  }

  function handlePasswordChange(e) {
    let password_value = e.target.value;
    setPassword(password_value);
    setPasswordValidated(validatePassword(password_value));
  }

  function handleConfirmPasswordChange(e) {
    let confirmPassword_value = e.target.value;
    setConfirmPassword(confirmPassword_value);
    setConfirmPasswordValidated(
      validateConfirmPassword(password, confirmPassword_value)
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      emailValidated === true &&
      passwordValidated &&
      confirmpasswordValidated
    ) {
      alert("Form Submitted Successfully");
    } else {
      alert("cant submit the form");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">User Name</label>
        <input type="text" id="text" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={emailValidated === true ? "is-valid" : "is-invalid"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className={passwordValidated === true ? "is-valid" : "is-invalid"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirm-password"> confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmpassword}
          onChange={handleConfirmPasswordChange}
          className={
            confirmpasswordValidated === true ? "is-valid" : "is-invalid"
          }
        />
      </div>
      <button type="submit">SIGN UP</button>
    </form>
  );
};

export default SignUp;
