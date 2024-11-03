import { z } from 'zod';
import { createUserWeaponSchema } from '../schemes';

export type CreateUserWeaponType = z.infer<typeof createUserWeaponSchema>;
