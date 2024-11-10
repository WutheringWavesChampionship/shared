import { z } from 'zod';
import {
  FieldErrorEnum,
  MAX_CHARACTER_CONSTANTS,
  MAX_CHARACTER_LEVEL,
} from '../constants';

export const createUserCharacterSchema = z.object({
  userId: z.number({ required_error: FieldErrorEnum.REQUIRED }).int(),
  characterId: z.number({ required_error: FieldErrorEnum.REQUIRED }).int(),
});

export const updateUserCharacterSchema = z.object({
  constants: z
    .number({ required_error: FieldErrorEnum.REQUIRED })
    .int()
    .min(0)
    .max(MAX_CHARACTER_CONSTANTS),
  level: z
    .number({ required_error: FieldErrorEnum.REQUIRED })
    .int()
    .positive()
    .max(MAX_CHARACTER_LEVEL),
  critValue: z.number().positive().optional().nullable(),
});
