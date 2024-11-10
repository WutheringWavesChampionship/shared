import { z } from 'zod';
import {
  createUserCharacterSchema,
  updateUserCharacterSchema,
} from '../schemes';
import { IBaseEntity } from './baseEntity';
import { CharacterType } from './character';

export type UpdateUserCharacterType = z.infer<typeof updateUserCharacterSchema>;
export type CreateUserCharacterType = z.infer<typeof createUserCharacterSchema>;

export type UserCharacterType = UpdateUserCharacterType &
  IBaseEntity & {
    character: CharacterType;
  };
