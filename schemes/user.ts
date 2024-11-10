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

export const registrationUserSchema = z
  .object({
    username: z
      .string({ required_error: FieldErrorEnum.REQUIRED })
      .min(1, FieldErrorEnum.REQUIRED)
      .max(256, FieldErrorEnum.MAX_256),
    password: z
      .string({ required_error: FieldErrorEnum.REQUIRED })
      .min(1, FieldErrorEnum.REQUIRED)
      .max(256, FieldErrorEnum.MAX_256),
    password_confirmation: z
      .string({ required_error: FieldErrorEnum.REQUIRED })
      .min(1, FieldErrorEnum.REQUIRED)
      .max(256, FieldErrorEnum.MAX_256),
  })
  .refine(
    ({ password, password_confirmation }) => password === password_confirmation,
    { message: FieldErrorEnum.PASSWORD_MATCH, path: ['password_confirmation'] },
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
