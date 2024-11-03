import { z } from 'zod';
import {
  FieldErrorEnum,
  MAX_WEAPON_CONSTANTS,
  MAX_WEAPON_LEVEL,
} from '../constants';

export const createUserWeaponSchema = z.object({
  userId: z.number({ required_error: FieldErrorEnum.REQUIRED }).int(),
  weaponId: z.number({ required_error: FieldErrorEnum.REQUIRED }).int(),
  constants: z
    .number({ required_error: FieldErrorEnum.REQUIRED })
    .int()
    .positive()
    .max(MAX_WEAPON_CONSTANTS),
  level: z
    .number({ required_error: FieldErrorEnum.REQUIRED })
    .int()
    .positive()
    .min(1)
    .max(MAX_WEAPON_LEVEL),
});
