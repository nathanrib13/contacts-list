import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Container from "./style";
import { registerSchema, registernData } from "../../providers/validator";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import api from "../../services/api";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<registernData>({
    resolver: zodResolver(registerSchema),
  });

  const registerReq = async (data: registernData) => {
    try {
      await api.post("/users", data);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("nao foi possivel criar sua conta");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(registerReq)}>
        <h1>Crie sua conta</h1>
        <label htmlFor="">Nome</label>
        <input type="text" id="name" {...register("name")} />
        <label htmlFor="">Email</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="">Telefone</label>
        <input type="text" id="phone" {...register("phone")} />
        <label htmlFor="">Senha</label>
        <input type="password" id="password" {...register("password")} />
        <button type="submit">Cadastrar</button>
        <span>Ja tem uma conta?</span>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          Faça Login
        </button>
      </form>
      <div></div>
      <Toaster position="top-center" />
    </Container>
  );
};

export default Register;
