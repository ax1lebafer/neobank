import styles from './styles.module.scss';
import { ITableProps } from '@components/shared/Table/types';

export const Table = <T,>({ columns, items }: ITableProps<T>) => {
  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr className={styles.table__row}>
          {columns.map((col) => {
            return (
              <th
                key={String(col.id)}
                align={col.align ?? 'left'}
                scope="col"
                className={styles.table__cell}
                style={col.width ? { width: `${col.width}px` } : undefined}
              >
                {col.label.toUpperCase()}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {items.map((item, idx) => (
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
  );
};
