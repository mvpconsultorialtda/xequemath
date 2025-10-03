
import { z } from 'zod';

export const requestInvitationSchema = z.object({
  email: z.string().email({ message: 'Por favor, insira um endereço de e-mail válido.' }),
  justification: z.string().optional(),
  evidence: z.string().optional(),
});
