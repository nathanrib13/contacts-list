import { z } from "zod";

const schema = z.object({
  email: z.string().email("Insira um email válido"),
  password: z.string().nonempty("Senha obrigatória"),
});

export type loginData = z.infer<typeof schema>;

export default schema;
