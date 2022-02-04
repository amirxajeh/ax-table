export interface ITableDataProps {
  field: string
  search?: boolean
  onSearchHandler?: (key: string, value: string) => void
  sort?: boolean
}