import { IColumn } from "./Column";
import { IData } from "./Data";
import { ITableDataState } from "./Td";

export interface ITableRow {
  columns: IColumn[]
  data: IData
  search?: boolean
  onSearchHandler?: (key: string, value: string) => void
  onSortHandler?: (key: string, type: ITableDataState['sortType']) => void
  head?: boolean
}

