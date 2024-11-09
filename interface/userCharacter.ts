import { z } from 'zod';

import {
  createUserCharacterSchema,
  updateUserCharacterSchema,
} from '../schemes';

export type UpdateUserCharacterType = z.infer<typeof updateUserCharacterSchema>;
export type CreateUserCharacterType = z.infer<typeof createUserCharacterSchema>;
