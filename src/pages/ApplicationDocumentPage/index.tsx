import { Table } from '@components/shared/Table';
import {
  DOCUMENT_COLUMNS,
  DOCUMENT_ITEMS,
} from '@/pages/ApplicationDocumentPage/constants';

export const ApplicationDocumentPage = () => {
  return (
    <>
      <Table columns={DOCUMENT_COLUMNS} items={DOCUMENT_ITEMS} />
    </>
  );
};
