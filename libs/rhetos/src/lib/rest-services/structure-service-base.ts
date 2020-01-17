import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { RhetosConfig } from '../config/config';
import { RHETOS_CONFIG } from '../config/injection-tokens';
import { StructureMetadataService } from '../metadata/structure-metadata-service';
import { StructureMetadata } from '../metadata/structure-metadata-map';
import { javascriptDatetoMsDate, msDateToJavascriptDate } from '../utils/date';

@Injectable({ providedIn: 'root' })
export class StructureServiceBase {
  constructor(
    @Inject(RHETOS_CONFIG) public config: RhetosConfig,
    public http: HttpClient,
    public metadata: StructureMetadataService
  ) {}

  getStructureUrl(structurePath: string) {
    return this.config.restUrl + structurePath + '/';
  }

  transformIncomingRecordArray<T>(records: T[], meta: StructureMetadata) {
    records.forEach(rec => {
      this.transformIncomingRecord(rec, meta);
    });
    return records;
  }

  transformOutgoingRecordArray(records: any[], meta: StructureMetadata) {
    records.forEach(rec => {
      this.transformOutgoingRecord(rec, meta);
    });
    return records;
  }

  transformIncomingRecord(record: unknown, meta: StructureMetadata) {
    Object.keys(record)
      .filter(d => d !== 'ID')
      .forEach(key => {
        // msDate to Js Date
        if (meta.properties[key].type === 'DateTime') {
          record[key] = msDateToJavascriptDate(record[key]);
        }
        // null -> undefined
        if (this.config.replaceNullWithUndefined && record[key] === null) {
          record[key] = undefined;
        }
      });
    return record;
  }

  transformOutgoingRecord(record: unknown, meta: StructureMetadata) {
    Object.keys(record)
      .filter(d => d !== 'ID')
      .forEach(key => {
        // Js Date to MsDate
        if (meta.properties[key].type === 'DateTime') {
          record[key] = javascriptDatetoMsDate(record[key]);
        }
      });
    return record;
  }
}
