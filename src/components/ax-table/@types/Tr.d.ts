import { IColumn } from "./Column";
import { IData } from "./Data";

export interface ITableRow {
  columns: IColumn[]
  data: IData
  search?: boolean
  onSearchHandler?: (key: string, value: string) => void
}