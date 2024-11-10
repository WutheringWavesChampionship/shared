import { z } from 'zod';
import {
  createUserSchema,
  loginUserSchema,
  registrationUserSchema,
} from '../schemes';
import { IBaseEntity } from './baseEntity';

export type CreateUserType = z.infer<typeof createUserSchema>;
export type RegistrationUserType = z.infer<typeof registrationUserSchema>;
export type LoginUserType = z.infer<typeof loginUserSchema>;

export type UserType = Omit<CreateUserType, 'password'> &
  IBaseEntity & {
    imageId?: number;
    image?: string;
  };
