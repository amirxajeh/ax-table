export interface ITableDataProps {
  field: string
  search?: boolean
  onSearchHandler?: (key: string, value: string) => void
  onSortHandler?: (key: string, type: ITableDataState['sortType']) => void
  sort?: boolean
}

export interface ITableDataState {
  sortType?: 'default' | 'asce' | 'desc'

}