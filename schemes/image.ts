import { z } from 'zod';
import { FieldErrorEnum } from '../constants';

export const createImageSchema = z.object({
  filePath: z.string({ required_error: FieldErrorEnum.REQUIRED }).optional(),
});
