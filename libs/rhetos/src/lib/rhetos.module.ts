import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { resolveAuthInterceptor } from './auth/types';
import { RhetosConfig, rhetosConfigDefaults } from './config/config';
import { RHETOS_CONFIG, RHETOS_REST_URL } from './config/injection-tokens';

@NgModule({
  imports: []
})
export class RhetosModule {
  static forRoot(config: RhetosConfig): ModuleWithProviders<RhetosModule> {
    return {
      ngModule: RhetosModule,
      providers: [
        {
          provide: RHETOS_CONFIG,
          useValue: { ...rhetosConfigDefaults, ...config }
        },
        {
          provide: RHETOS_REST_URL,
          useValue: config.restUrl
        },
        {
          provide: HTTP_INTERCEPTORS,
          useFactory: resolveAuthInterceptor,
          deps: [RHETOS_CONFIG],
          multi: true
        }
      ]
    };
  }
}
