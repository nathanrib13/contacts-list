import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().max(75),
  password: z.string(),
});

export default loginSchema;
