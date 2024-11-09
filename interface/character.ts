import { z } from 'zod';

import { createCharacterSchema } from '../schemes';

import { IBaseEntity } from './baseEntity';

export type CreateCharacterType = z.infer<typeof createCharacterSchema>;

export type CharacterType = CreateCharacterType & IBaseEntity;
