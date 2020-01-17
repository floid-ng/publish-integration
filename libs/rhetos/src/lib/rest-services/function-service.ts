import { forkJoin, Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { StructureServiceBase } from './structure-service-base';

export interface IFunctionService<T, R> {
  invoke(param: T): Observable<R>;
}

export class FunctionService<T, R> implements IFunctionService<T, R> {
  constructor(
    protected reqStructureKey: string,
    protected resStructureKey: string,
    protected base: StructureServiceBase
  ) {}

  invoke(param: T): Observable<R> {
    return forkJoin([
      this.base.metadata.get(this.reqStructureKey),
      this.base.metadata.get(this.resStructureKey)
    ]).pipe(
      concatMap(([reqMeta, resMeta]) => {
        const data = this.base.transformOutgoingRecord(param, reqMeta);
        return this.base.http.post<R>(this.base.getStructureUrl(this.reqStructureKey), data).pipe(
          map(res => {
            this.base.transformIncomingRecord(res, resMeta);
            return res;
          })
        );
      })
    );
  }
}
