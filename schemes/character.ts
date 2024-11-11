import { z } from 'zod';
import {
  ElementEnum,
  FieldErrorEnum,
  RarityEnum,
  WeaponTypeEnum,
} from '../constants';

export const createCharacterSchema = z.object({
  name: z
    .string({ required_error: FieldErrorEnum.REQUIRED })
    .min(1, FieldErrorEnum.REQUIRED)
    .max(256, FieldErrorEnum.MAX_256)
    .trim(),
  weaponType: z.enum([
    WeaponTypeEnum.BROAD_BLADE,
    WeaponTypeEnum.GAUNTLETS,
    WeaponTypeEnum.PISTOLS,
    WeaponTypeEnum.RECTIFIER,
    WeaponTypeEnum.SWORD,
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
