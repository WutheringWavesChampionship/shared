import { z } from 'zod';
import { createUserSchema, loginUserSchema } from '../schemes';

export type CreateUserType = z.infer<typeof createUserSchema>;
export type LoginUserType = z.infer<typeof loginUserSchema>;
