import { z } from 'zod';
import { createUserCharacterSchema } from '../schemes';

export type CreateUserCharacterType = z.infer<typeof createUserCharacterSchema>;
