import styles from './styles.module.scss';
import { ITableProps, TSortDirections } from '@components/shared/Table/types';

import ArrowUp from '@/assets/icons/arrow_sort_up.svg';
import ArrowDown from '@/assets/icons/arrow_sort_down.svg';

import { useEffect, useState } from 'react';

export const Table = <T,>({ columns, items }: ITableProps<T>) => {
  const initialSortDirections: TSortDirections = columns.reduce((acc, col) => {
    acc[String(col.id)] = 'desc';
    return acc;
  }, {} as TSortDirections);

  const [sortDirections, setSortDirections] = useState<TSortDirections>(
    initialSortDirections
  );
  const [sortedItems, setSortedItems] = useState<T[]>(items);

  useEffect(() => {
    setSortedItems(items);
    setSortDirections(initialSortDirections);
  }, [items]);

  const handleSort = (colId: keyof T) => {
    const key = String(colId);
    const newDir = sortDirections[key] === 'asc' ? 'desc' : 'asc';
    const newSortDirections: TSortDirections = {
      ...initialSortDirections,
      [key]: newDir,
    };

    const sorted = [...items].sort((a, b) => {
      const aVal = a[colId];
      const bVal = b[colId];

      if (aVal == null) return 1;
      if (bVal == null) return -1;

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return newDir === 'asc' ? aVal - bVal : bVal - aVal;
      }

      const aStr = String(aVal);
      const bStr = String(bVal);
      return newDir === 'asc'
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });

    setSortDirections(newSortDirections);
    setSortedItems(sorted);
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table__row}>
            {columns.map((col) => {
              const key = String(col.id);
              const IconSrc =
                sortDirections[key] === 'asc' ? ArrowUp : ArrowDown;
              return (
                <th
                  key={String(col.id)}
                  align={col.align ?? 'left'}
                  scope="col"
                  className={styles.table__cell}
                  style={col.width ? { width: `${col.width}px` } : undefined}
                  onClick={() => handleSort(col.id)}
                >
                  <div className={styles.table__headerCell}>
                    <span>{col.label.toUpperCase()}</span>
                    <img src={IconSrc} alt="Arrow" />
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {sortedItems.map((item, idx) => (
            <tr key={idx} className={styles.table__row}>
              {columns.map((col) => {
                const value = String(item[col.id] ?? '');
                return (
                  <td
                    key={String(col.id)}
                    align={col.align ?? 'left'}
                    className={styles.table__cell}
                    style={col.width ? { width: `${col.width}px` } : undefined}
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
