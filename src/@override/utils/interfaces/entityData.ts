import { ColDef } from 'ag-grid-community';
import { AbstractField } from "./field";
export interface EntityData {
  apiSelector: string,
  name: {
    single: string,
    plural: string,
  }
  route: string;
  edit: boolean
  view: boolean
  add: boolean
  upload: boolean
  export: boolean
  delete: boolean
  table?: {
    columnDefs: ColDef[];
    rowData?: any[],
    paginated: boolean,
    paginationPageSize?: number
    noCard?: boolean
    pivotMode: boolean
  },
  form?: {
    fields: AbstractField[];
    localizedAllFields?:boolean,
    cols: number,
  }

}
