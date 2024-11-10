import { z } from 'zod';
import { createWeaponSchema } from '../schemes';
import { IBaseEntity } from './baseEntity';

export type CreateWeaponType = z.infer<typeof createWeaponSchema>;

export type WeaponType = CreateWeaponType &
  IBaseEntity & {
    imageId?: number;
    image?: string;
  };
