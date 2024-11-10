import { z } from 'zod';
import { FieldErrorEnum } from '../constants';

export const createUserSchema = z
  .object({
    username: z
      .string({ required_error: FieldErrorEnum.REQUIRED })
      .min(1, FieldErrorEnum.REQUIRED)
      .max(256, FieldErrorEnum.MAX_256),
    password: z
      .string({ required_error: FieldErrorEnum.REQUIRED })
      .min(1, FieldErrorEnum.REQUIRED)
      .max(256, FieldErrorEnum.MAX_256)
      .optional(),
    telegram_id: z
      .string({ required_error: FieldErrorEnum.REQUIRED })
      .min(1, FieldErrorEnum.REQUIRED)
      .max(256, FieldErrorEnum.MAX_256)
      .optional(),
  })
  .refine(
    ({ password, telegram_id }) => {
      return !!password || !!telegram_id;
    },
    { message: FieldErrorEnum.REQUIRED, path: ['password'] },
  );

export const loginUserSchema = z.object({
  username: z
    .string({ required_error: FieldErrorEnum.REQUIRED })
    .min(1, FieldErrorEnum.REQUIRED)
    .max(256, FieldErrorEnum.MAX_256),
  password: z
    .string({ required_error: FieldErrorEnum.REQUIRED })
    .min(1, FieldErrorEnum.REQUIRED)
    .max(256, FieldErrorEnum.MAX_256),
});
