import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Insira um email válido"),
  password: z.string().nonempty("Senha obrigatória"),
});

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email("Insira um email válido"),
  phone:  z.string(),
  password: z.string().nonempty("Senha obrigatória"),
});


export type loginData = z.infer<typeof loginSchema>;
export type registernData = z.infer<typeof registerSchema>;

export { loginSchema, registerSchema}
