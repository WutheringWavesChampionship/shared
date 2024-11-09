import { z } from 'zod';

import { createUserSchema, loginUserSchema } from '../schemes';
import { IBaseEntity } from './baseEntity';

export type CreateUserType = z.infer<typeof createUserSchema>;
export type LoginUserType = z.infer<typeof loginUserSchema>;

export type UserType = Omit<CreateUserType, 'password'> & IBaseEntity;
