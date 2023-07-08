import { z } from "zod";


export enum Category {
  Family = 'Family',
  Friends = 'Friends',
  Work = 'Work',
  Service = 'Service',
}

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

const updateUserSchema = registerSchema.partial()


const newContactSchema = z.object({
  name: z.string(),
  email: z.string().email("Insira um email válido"),
  phone:  z.string(),
  category:  z.nativeEnum(Category)
});


export type loginData = z.infer<typeof loginSchema>;
export type registernData = z.infer<typeof registerSchema>;
export type updateUserData = z.infer<typeof updateUserSchema>;
export type NewContact = z.infer<typeof newContactSchema>;


export { loginSchema, registerSchema, newContactSchema, updateUserSchema}
