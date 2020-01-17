export interface StructureMetadataMap {
  [key: string]: StructureMetadata;
}

export interface StructureMetadata {
  key: string;
  serviceType?: string;
  hasReadRowPermissions?: boolean;
  properties: { [key: string]: PropertyMetadata };
}

export interface PropertyMetadata {
  type: string;
  required?: boolean;
  referenceKey?: string;
  minValue?: string | number;
  maxValue?: string | number;
  minLength?: number;
  maxLength?: number;
  regex?: {
    expression: string;
    message: string;
  };
}
