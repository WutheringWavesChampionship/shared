import { z } from 'zod';
import { createImageSchema } from '../schemes';

export type CreateImageType = z.infer<typeof createImageSchema>;

export interface UploadImageProps {
  basePath: string;
  data: string | Buffer;
}
