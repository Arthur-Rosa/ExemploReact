import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import axios, { AxiosError } from "axios";
import { SERVER } from "../../util/server";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${SERVER}/user/login`, {
        username,
        password,
      });

      alert("Login successful");
      // Salvar o token no local storage para uso posterior
      sessionStorage.setItem("tk", res.data.token);
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.status === 400) {
        alert("Usuario ou senha incorreta");
      } else {
        console.error("Erro ao fazer login", axiosError);
        alert("Ocorreu um erro ao fazer login");
      }
    }
  };

  return (
    <LoginForm
      onLogin={handleLogin}
      onUsernameChange={handleUsernameChange}
      onPasswordChange={handlePasswordChange}
    />
  );
}

export default Login;
