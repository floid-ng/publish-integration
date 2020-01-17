import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { StructureServiceBase } from './structure-service-base';
import { IActionStructure } from '../data-structures/models';

export interface IActionService<T extends IActionStructure> {
  invoke(param: T): Observable<void>;
}

export class ActionService<T extends IActionStructure> implements IActionService<T> {
  constructor(protected structureKey: string, protected base: StructureServiceBase) {}

  invoke(param: T): Observable<void> {
    return this.base.metadata.get(this.structureKey).pipe(
      concatMap(meta => {
        const data = this.base.transformOutgoingRecord(param, meta);
        return this.base.http.post<void>(this.base.getStructureUrl(this.structureKey), data);
      })
    );
  }
}
