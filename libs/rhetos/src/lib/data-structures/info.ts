export interface StructureInfo<T> {
  key: string;
}

export function createStructureInfo<T>(key: string): StructureInfo<T> {
  return { key };
}

export interface FunctionInfo<T, R> {
  reqInfo: StructureInfo<T>;
  resInfo: StructureInfo<R>;
}

export function createFunctionInfo<T, R>(
  reqInfo: StructureInfo<T>,
  resInfo: StructureInfo<R>
): FunctionInfo<T, R> {
  return { reqInfo, resInfo };
}

export interface ComplexEntityInfo<T> {
  key: string;
  dependentStructureKeys: string[];
}

export function createComplexEntityInfo<T>(
  key: string,
  ...dependentStructureKeys: string[]
): ComplexEntityInfo<T> {
  return { key: key, dependentStructureKeys };
}
