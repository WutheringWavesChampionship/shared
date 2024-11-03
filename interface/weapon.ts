import { z } from 'zod';
import { createWeaponSchema } from '../schemes';

export type CreateWeaponType = z.infer<typeof createWeaponSchema>;
