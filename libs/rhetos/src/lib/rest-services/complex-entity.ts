import { Injectable } from '@angular/core';
import { FunctionService } from './function-service';
import { ActionService } from './action-service';
import { StructureServiceBase } from './structure-service-base';
import { Observable } from 'rxjs';

@Injectable()
export class ComplexEntityService<T> {
  private structureUrl: string;
  private getService: FunctionService<string, T>;
  private saveService: ActionService<T>;

  constructor(
    private structureKey: string,
    private dependentStructureKeys: string[],
    private base: StructureServiceBase
  ) {
    this.structureUrl = base.getStructureUrl(structureKey);
    const keyParts = this.structureKey.split('/');
    this.getService = new FunctionService<string, T>(
      undefined,
      `${keyParts[0]}/Get${keyParts[1]}`,
      base
    );
    this.saveService = new ActionService<T>(`${keyParts[0]}/Save${keyParts[1]}`, base);
  }

  get(ID: string): Observable<T> {
    return this.getService.invoke(ID);
  }

  save(entity: T): Observable<void> {
    return this.saveService.invoke(entity);
  }
}
