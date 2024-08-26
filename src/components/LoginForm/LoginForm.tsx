import React from "react";
import "./style.css";
import { LoginFormProps } from "../../interface/LoginForm/LoginFormProps";

const LoginForm: React.FC<LoginFormProps> = ({
  onUsernameChange,
  onPasswordChange,
  onLogin,
}) => {
  return (
    /* Login -> LoginForm */
    <form onSubmit={onLogin}>
      <input onChange={onUsernameChange} type="text" placeholder="Username" />
      <input
        onChange={onPasswordChange}
        type="password"
        placeholder="Password"
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
