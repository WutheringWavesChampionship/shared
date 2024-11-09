import { z } from 'zod';

import { createUserWeaponSchema, updateUserWeaponSchema } from '../schemes';

import { IBaseEntity } from './baseEntity';
import { WeaponType } from './weapon';

export type CreateUserWeaponType = z.infer<typeof createUserWeaponSchema>;
export type UpdateUserWeaponType = z.infer<typeof updateUserWeaponSchema>;

export type UserWeaponType = UpdateUserWeaponType &
  IBaseEntity & {
    weapon: WeaponType;
  };
