import { BaseResponse } from "./base";

type KVIndexType = "string" | "number";
type KVValueFormat = "string" | "byte-string";

export interface KVNewTable {
  pod_name: string;
  table_name: string;
  indexType?: KVIndexType;
}

export interface KVNewTableResponse extends BaseResponse {}

export interface KVListTables {
  pod_name: string;
}

export interface KVListTablesResponse {
  Tables: {
    table_name: string;
    indexes: string[];
    type: KVIndexType;
  }[];
}

export interface KVOpenTable {
  pod_name: string;
  table_name: string;
}

export interface KVOpenTableResponse extends BaseResponse {}

export interface KVCountTablePairs {
  pod_name: string;
  table_name: string;
}

export interface KVCountTablePairsResponse {
  count: number;
  table_name: string;
}

export interface KVDeleteTable {
  pod_name: string;
  table_name: string;
}

export interface KVDeleteTableResponse extends BaseResponse {}

export interface KVPutPair {
  pod_name: string;
  table_name: string;
  key: string;
  value: string;
}

export interface KVPutPairResponse extends BaseResponse {}

export interface KVGetValue {
  pod_name: string;
  table_name: string;
  key: string;
  format?: KVValueFormat;
}

export interface KVGetValueResponse {
  keys: string[];
  values: string;
}

export interface KVDeleteValue {
  pod_name: string;
  table_name: string;
  key: string;
}

export interface KVDeleteValueResponse extends BaseResponse {}

export interface KVSeekKey {
  pod_name: string;
  table_name: string;
  start: string;
  end?: string;
  limit?: number;
}

export interface KVSeekKeyResponse extends BaseResponse {}

export interface KVGetSeekNext {
  pod_name: string;
  table_name: string;
}

export interface KVGetSeekNextResponse {
  keys: {
    key: string;
  }[];
  values: {
    value: string;
  }[];
}

export interface KVLoadCSV {
  pod_name: string;
  table_name: string;
  file_buffer: Buffer | Blob;
  file_name: string;
  memory?: string;
}

export interface KVLoadCSVResponse extends BaseResponse {}

export interface KVKeyPresent {
  pod_name: string;
  table_name: string;
  key: string;
}

export interface KVKeyPresentResponse {
  present: boolean;
  error: string;
}
