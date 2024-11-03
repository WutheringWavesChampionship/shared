import { z } from 'zod';
import {
  ElementEnum,
  FieldErrorEnum,
  RarityEnum,
  WEAPON_TYPES,
} from '../constants';

export const createCharacterSchema = z.object({
  name: z
    .string({ required_error: FieldErrorEnum.REQUIRED })
    .min(1, FieldErrorEnum.REQUIRED)
    .max(256, FieldErrorEnum.MAX_256),
  weaponType: z.enum([
    WEAPON_TYPES.BROAD_BLADE,
    WEAPON_TYPES.GAUNTLETS,
    WEAPON_TYPES.PISTOLS,
    WEAPON_TYPES.RECTIFIER,
    WEAPON_TYPES.SWORD,
  ]),
  element: z.enum([
    ElementEnum.AERO,
    ElementEnum.FUSION,
    ElementEnum.GLACIO,
    ElementEnum.HAVOC,
    ElementEnum.SPECTRO,
    ElementEnum.ELECTRO,
  ]),
  rarity: z.enum([RarityEnum.LEGENDARY, RarityEnum.EPIC]),
});
