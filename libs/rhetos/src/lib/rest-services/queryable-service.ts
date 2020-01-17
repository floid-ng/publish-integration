/* tslint:disable:no-empty-interface */
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { StructureServiceBase } from './structure-service-base';
import { IQueryableStructure } from '../data-structures/models';

export class QueryableService<T extends IQueryableStructure> implements IQueryableService<T> {
  protected structureUrl: string;

  constructor(protected structureKey: string, protected base: StructureServiceBase) {
    this.structureUrl = this.base.getStructureUrl(structureKey);
  }

  getAll(): Observable<CollectionResponse<T>> {
    return this.base.metadata.get(this.structureKey).pipe(
      concatMap(meta => {
        const params = this.getQueryHttpParams({}, meta.hasReadRowPermissions);
        return this.base.http.get<CollectionResponse<T>>(this.structureUrl, { params }).pipe(
          map(res => {
            this.base.transformIncomingRecordArray(res.Records, meta);
            return res;
          })
        );
      })
    );
  }

  getByQuery(query: QueryParams): Observable<QueryableResponse<T>> {
    return this.base.metadata.get(this.structureKey).pipe(
      concatMap(meta => {
        const params = this.getQueryHttpParams(query, meta.hasReadRowPermissions);
        return this.base.http.get<QueryableResponse<T>>(this.structureUrl + 'RecordsAndTotalCount', { params }).pipe(
          map(res => {
            this.base.transformIncomingRecordArray(res.Records, meta);
            return res;
          })
        );
      })
    );
  }

  getById(id: string): Observable<T> {
    return this.base.metadata.get(this.structureKey).pipe(
      concatMap(meta => {
        const params = this.getQueryHttpParams({}, meta.hasReadRowPermissions);
        return this.base.http.get<T>(this.structureUrl + id, { params }).pipe(
          map(res => {
            this.base.transformIncomingRecord(res, meta);
            return res;
          })
        );
      })
    );
  }

  private getQueryHttpParams(query: QueryParams, hasReadRowPermissions: boolean): HttpParams {
    const params = {};

    const filtersValue = this.getFiltersParamValue(query, hasReadRowPermissions);
    if (filtersValue) params['Filters'] = filtersValue;

    if (query.hasOwnProperty('sort')) params['sort'] = query.sort;
    if (query.hasOwnProperty('top')) params['top'] = query.top;
    if (query.hasOwnProperty('skip')) params['skip'] = query.skip;

    return new HttpParams({ fromObject: params });
  }

  private getFiltersParamValue(query: QueryParams, hasReadRowPermissions: boolean) {
    const filtersArray: string[] = [];

    if ('specificFilters' in query && query.specificFilters.length > 0) {
      query.specificFilters.forEach(sf => {
        filtersArray.push(
          JSON.stringify({
            Filter: sf.key.replace('/', '.'),
            Value: sf.value
          })
        );
      });
    }

    if ('genericPropertyFilters' in query && query.genericPropertyFilters.length > 0) {
      query.genericPropertyFilters.forEach(gpf => {
        filtersArray.push(JSON.stringify(gpf));
      });
    }

    if (hasReadRowPermissions) {
      filtersArray.push('{"Filter":"Common.RowPermissionsReadItems"}');
    }

    return filtersArray.length > 0 ? '[' + filtersArray.join(',') + ']' : undefined;
  }
}

export interface IQueryableService<T> {
  getAll(): Observable<CollectionResponse<T>>;
  getById(id: string): Observable<T>;
  getByQuery(params: QueryParams): Observable<QueryableResponse<T>>;
}

export interface CollectionResponse<T = any> {
  Records: T[];
}

export interface QueryableResponse<T = any> extends CollectionResponse<T> {
  TotalCount: number;
}

export interface QueryParams {
  sort?: string;
  skip?: number;
  top?: number;
  genericPropertyFilters?: GenericPropertyFilter[];
  specificFilters?: SpecificFilter[];
}

export class SpecificFilterInfo<T extends SpecificFilterModel = any> {
  name: string;
  value?: unknown;

  constructor(filter?: SpecificFilter) {
    this.name = filter.key;
    if (filter.value) {
      this.value = filter.value;
    }
  }
}

export function createSpecificFilter<T>(key: string, value?: T): SpecificFilter<T> {
  return { key, value };
}

export function createGenericPropertyFilter(property: string, operation: string, value: string): GenericPropertyFilter {
  return { Value: value, Operation: operation, Property: property };
}

export class GenericPropertyFilterInfo {
  name: string;
  value: GenericPropertyFilter;

  constructor(value: GenericPropertyFilter) {
    this.value = value;
  }
}

export interface GenericPropertyFilter {
  Property: string;
  Operation: string;
  Value: string;
}

export interface SpecificFilter<T = any> {
  key: string;
  value: T;
}

export interface SpecificFilterModel {}
