import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import schema, { loginData } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import Container from "./style";

const Login = () => {
  const { register, handleSubmit } = useForm<loginData>({
    resolver: zodResolver(schema),
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
      </form>
    </Container>
  );
};

export default Login;
