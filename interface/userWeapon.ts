import { z } from 'zod';

import { createUserWeaponSchema, updateUserWeaponSchema } from '../schemes';

export type CreateUserWeaponType = z.infer<typeof createUserWeaponSchema>;
export type UpdateUserWeaponType = z.infer<typeof updateUserWeaponSchema>;
