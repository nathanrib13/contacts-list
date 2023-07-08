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
      <div>
        <h1>Link Up</h1>
        <h2>Conectando você a quem importa</h2>
      </div>

      <section>
        <form onSubmit={handleSubmit(signIn)}>
          <h1>Login</h1>
          <label htmlFor="">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Digite seu email"
          />
          <label htmlFor="">Senha</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Digite sua senha"
          />

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
      </section>
    </Container>
  );
};

export default Login;
