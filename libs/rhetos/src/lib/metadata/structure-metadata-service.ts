import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RhetosConfig } from '../config/config';
import { StructureMetadata, StructureMetadataMap } from './structure-metadata-map';
import { RHETOS_CONFIG } from '../config/injection-tokens';

@Injectable({ providedIn: 'root' })
export class StructureMetadataService {
  private metadataMapCache: StructureMetadataMap = {};

  constructor(@Inject(RHETOS_CONFIG) private config: RhetosConfig, private http: HttpClient) {}

  get(key: string) {
    const meta = this.metadataMapCache[key];
    return meta
      ? of(meta)
      : this.getStructureMetadataExternal(key).pipe(
          tap(m => {
            this.metadataMapCache[key] = m;
            return m;
          })
        );
  }

  getPropertyMetadata(structureId: string, propertyId: string) {
    return this.metadataMapCache[structureId].properties[propertyId];
  }

  registerMetadataMap(metadataMaps: StructureMetadataMap[]) {
    metadataMaps.forEach(m => {
      Object.keys(m).forEach(key => {
        this.metadataMapCache[key] = { ...defaultStructureMetadata, ...m[key] };
      });
    });
  }

  registerMetadata(meta: StructureMetadata) {
    this.metadataMapCache[meta.key] = meta;
  }

  clearMetadataFromCache(key: string) {
    this.metadataMapCache[key] = undefined;
  }

  clearCache() {
    this.metadataMapCache = {};
  }

  private getStructureMetadataExternal(key: string): Observable<StructureMetadata> {
    const url = this.config.restUrl + 'Common/GetStructureMetadata/';
    return this.http.post<{ Value: string }>(url, { Key: key }).pipe(map(res => JSON.parse(`${res.Value}`)));
  }
}

export const defaultStructureMetadata: Partial<StructureMetadata> = {
  hasReadRowPermissions: false
};
