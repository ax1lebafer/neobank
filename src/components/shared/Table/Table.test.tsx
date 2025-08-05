import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Table } from '@components/shared/Table/index';
import { ITableColumns } from '@components/shared/Table/types';
import ArrowDown from '@/assets/icons/arrow_sort_down.svg';
import ArrowUp from '@/assets/icons/arrow_sort_up.svg';
import userEvent from '@testing-library/user-event';

interface Item {
  id: number;
  name: string;
  age: number;
}

const COLUMNS: ITableColumns<Item>[] = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },
];
const ITEMS: Item[] = [
  { id: 2, name: 'Alice', age: 30 },
  { id: 1, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
];

describe('Table component', () => {
  it('renders headers and initial rows in original order', () => {
    render(<Table columns={COLUMNS} items={ITEMS} />);

    expect(
      screen.getByRole('columnheader', { name: /ID/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: /Name/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: /Age/i })
    ).toBeInTheDocument();

    const headerCells = screen.getAllByRole('columnheader');
    headerCells.forEach((cell) => {
      const img = cell.querySelector('img') as HTMLImageElement;
      expect(img).toBeInTheDocument();
      expect(img.src).toContain(ArrowDown);
    });

    const rows = screen.getAllByRole('row');
    const dataRows = rows.slice(1);
    expect(dataRows[0]).toHaveTextContent('2Alice30');
    expect(dataRows[1]).toHaveTextContent('1Bob25');
    expect(dataRows[2]).toHaveTextContent('3Charlie35');
  });

  it('sorts ascending when clicking on a header', async () => {
    render(<Table columns={COLUMNS} items={ITEMS} />);
    const user = userEvent.setup();

    const idHeader = screen.getByRole('columnheader', { name: /ID/i });
    await user.click(idHeader);

    const img = idHeader.querySelector('img') as HTMLImageElement;
    expect(img.src).toContain(ArrowUp);

    const dataRows = screen.getAllByRole('row').slice(1);
    expect(dataRows[0]).toHaveTextContent('1Bob25');
    expect(dataRows[1]).toHaveTextContent('2Alice30');
    expect(dataRows[2]).toHaveTextContent('3Charlie35');
  });

  it('sorts descending when clicking twice on the same header', async () => {
    render(<Table columns={COLUMNS} items={ITEMS} />);
    const user = userEvent.setup();

    const ageHeader = screen.getByRole('columnheader', { name: /Age/i });
    await user.click(ageHeader);
    await user.click(ageHeader);

    const img = ageHeader.querySelector('img') as HTMLImageElement;
    expect(img.src).toContain(ArrowDown);

    const dataRows = screen.getAllByRole('row').slice(1);
    expect(dataRows[0]).toHaveTextContent('3Charlie35');
    expect(dataRows[1]).toHaveTextContent('2Alice30');
    expect(dataRows[2]).toHaveTextContent('1Bob25');
  });
});
