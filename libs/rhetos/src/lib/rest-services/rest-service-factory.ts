import { Injectable } from '@angular/core';
import { ComplexEntityInfo, FunctionInfo, StructureInfo } from '../data-structures/info';
import { ActionService } from './action-service';
import { ComplexEntityService } from './complex-entity';
import { FunctionService } from './function-service';
import { QueryableService } from './queryable-service';
import { EntityService } from './entity-service';
import { StructureServiceBase } from './structure-service-base';

@Injectable({ providedIn: 'root' })
export class StructureServiceFactory {
  constructor(private base: StructureServiceBase) {}

  createQueryableService<T>(info: StructureInfo<T>) {
    return new QueryableService<T>(info.key, this.base);
  }

  createEntityService<T>(info: StructureInfo<T>) {
    return new EntityService<T>(info.key, this.base);
  }

  createActionService<T>(info: StructureInfo<T>) {
    return new ActionService<T>(info.key, this.base);
  }

  createFunctionService<T, R>(info: FunctionInfo<T, R>) {
    return new FunctionService<T, R>(info.reqInfo.key, info.resInfo.key, this.base);
  }

  createComplexEntityService<T>(info: ComplexEntityInfo<T>) {
    return new ComplexEntityService<T>(info.key, info.dependentStructureKeys, this.base);
  }
}
