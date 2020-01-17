import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { QueryableService } from './queryable-service';
import { IEntityStructure } from '../data-structures/models';
import { StructureServiceBase } from './structure-service-base';

export interface IEntityService<T extends IEntityStructure> {
  insert(entity: T): Observable<ISaveResponse>;
  update(entity: T): Observable<ISaveResponse>;
  delete(id: string): Observable<string>;
}

export interface ISaveResponse {
  ID: string;
}

export class EntityService<T extends IEntityStructure> extends QueryableService<T> implements IEntityService<T> {
  constructor(protected structureKey: string, protected base: StructureServiceBase) {
    super(structureKey, base);
  }

  insert(entity: T): Observable<ISaveResponse> {
    return this.base.metadata.get(this.structureKey).pipe(
      concatMap(meta => {
        const data = this.base.transformOutgoingRecord(entity, meta);
        return this.base.http.post<ISaveResponse>(this.structureUrl, data);
      })
    );
  }

  update(entity: T): Observable<ISaveResponse> {
    return this.base.metadata.get(this.structureKey).pipe(
      concatMap(meta => {
        const data = this.base.transformOutgoingRecord(entity, meta);
        return this.base.http.put<ISaveResponse>(this.structureUrl, data);
      })
    );
  }

  delete(id: string): Observable<string> {
    return this.base.http.delete<string>(this.structureUrl + id);
  }
}
