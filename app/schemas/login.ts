
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um endereço de e-mail válido." }),
  password: z.string().min(1, { message: "A senha é obrigatória." }),
});
