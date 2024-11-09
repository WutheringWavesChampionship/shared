import { z } from 'zod';

import { createCharacterSchema } from '../schemes';

export type CreateCharacterType = z.infer<typeof createCharacterSchema>;
