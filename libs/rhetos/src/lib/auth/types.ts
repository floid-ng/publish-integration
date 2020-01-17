import { RhetosConfig } from '../config/config';
import { NoopInterceptor } from './noop-interceptor';
import { RhetosWithCredentialsInterceptor } from './rhetos-with-credentials-interceptor';

export type RhetosAuthType = 'windows' | 'forms' | 'open-id' | 'none';

export function resolveAuthInterceptor(config: RhetosConfig) {
  switch (config.authentication) {
    case 'forms':
    case 'windows':
      return new RhetosWithCredentialsInterceptor(config.restUrl);
    case 'open-id':
    case 'none':
      return new NoopInterceptor();
  }
}
