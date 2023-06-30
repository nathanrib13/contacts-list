import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

import { loginData, loginSchema } from "../../providers/validator";
import Container from "./style";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<loginData>({
    resolver: zodResolver(loginSchema),
  });

  const { signIn } = useAuth();
  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(signIn)}>
        <label htmlFor="">Email</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="">Senha</label>
        <input type="password" id="password" {...register("password")} />

        <button type="submit">Entrar</button>
        <span> Ainda nao possui uma conta?</span>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          {" "}
          Registre grátis
        </button>
      </form>
    </Container>
  );
};

export default Login;
