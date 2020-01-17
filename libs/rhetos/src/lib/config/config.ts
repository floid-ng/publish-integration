import { RhetosAuthType } from '../auth/types';

export interface RhetosConfig {
  restUrl: string;
  authentication?: RhetosAuthType;
  replaceNullWithUndefined?: boolean;
}

export const rhetosConfigDefaults: Partial<RhetosConfig> = {
  authentication: 'none',
  replaceNullWithUndefined: false
};
