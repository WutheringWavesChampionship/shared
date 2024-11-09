import { z } from 'zod';

import {
  FieldErrorEnum,
  RarityEnum,
  StatTypeEnum,
  WeaponTypeEnum,
} from '../constants';

export const createWeaponSchema = z.object({
  name: z
    .string({ required_error: FieldErrorEnum.REQUIRED })
    .min(1, FieldErrorEnum.REQUIRED)
    .max(256, FieldErrorEnum.MAX_256),
  mainStat: z.enum([
    StatTypeEnum.ATTACK,
    StatTypeEnum.CRIT_CHANCE,
    StatTypeEnum.CRIT_DAMAGE,
    StatTypeEnum.ENERGY_REGENERATION,
    StatTypeEnum.DEFENSE,
  ]),
  type: z.enum([
    WeaponTypeEnum.BROAD_BLADE,
    WeaponTypeEnum.GAUNTLETS,
    WeaponTypeEnum.PISTOLS,
    WeaponTypeEnum.RECTIFIER,
    WeaponTypeEnum.SWORD,
  ]),
  rarity: z.enum([RarityEnum.EPIC, RarityEnum.LEGENDARY, RarityEnum.COMMON]),
  statValue: z.number({ required_error: FieldErrorEnum.REQUIRED }),
  baseAttack: z.number({ required_error: FieldErrorEnum.REQUIRED }).int(),
});
