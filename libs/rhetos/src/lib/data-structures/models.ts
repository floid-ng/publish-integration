/* tslint:disable:no-empty-interface */

export interface IDataStructure {}

export interface IQueryableStructure extends IDataStructure {}

export interface IEntityStructure extends IQueryableStructure {
  ID?: string;
}

export interface IActionStructure extends IDataStructure {}
