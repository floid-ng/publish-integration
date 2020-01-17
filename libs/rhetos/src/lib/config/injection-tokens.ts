import { InjectionToken, Provider } from '@angular/core';
import { StructureMetadataMap } from '../metadata/structure-metadata-map';

export const RHETOS_CONFIG = new InjectionToken<string>('RHETOS_CONFIG');
export const RHETOS_REST_URL = new InjectionToken<string>('RHETOS_REST_URL');
export const RHETOS_SERVICE_OVERRIDES = new InjectionToken<Provider[]>('RHETOS_SERVICE_OVERRIDES');
export const RHETOS_STRUCTURE_METADATA = new InjectionToken<StructureMetadataMap[]>(
  'RHETOS_STRUCTURE_METADATA'
);
