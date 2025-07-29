export interface ITableProps<T> {
  columns: ITableColumns<T>[];
  items: T[];
}

export interface ITableColumns<T> {
  id: keyof T;
  label: string;
  width?: number;
  align?: 'left' | 'center' | 'right';
}

export type TSortDirections = Record<string, 'asc' | 'desc'>;
