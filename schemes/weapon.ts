import { z } from 'zod';
import {
  FieldErrorEnum,
  RarityEnum,
  STATS_TYPES,
  WEAPON_TYPES,
} from '../constants';

export const createWeaponSchema = z.object({
  name: z
    .string({ required_error: FieldErrorEnum.REQUIRED })
    .min(1, FieldErrorEnum.REQUIRED)
    .max(256, FieldErrorEnum.MAX_256),
  mainStat: z.enum([
    STATS_TYPES.ATTACK,
    STATS_TYPES.CRIT_CHANCE,
    STATS_TYPES.CRIT_DAMAGE,
    STATS_TYPES.ENERGY_REGENERATION,
    STATS_TYPES.DEFENSE,
  ]),
  type: z.enum([
    WEAPON_TYPES.BROAD_BLADE,
    WEAPON_TYPES.GAUNTLETS,
    WEAPON_TYPES.PISTOLS,
    WEAPON_TYPES.RECTIFIER,
    WEAPON_TYPES.SWORD,
  ]),
  rarity: z.enum([RarityEnum.EPIC, RarityEnum.LEGENDARY, RarityEnum.COMMON]),
  statValue: z.number({ required_error: FieldErrorEnum.REQUIRED }),
  baseAttack: z.number({ required_error: FieldErrorEnum.REQUIRED }).int(),
});
