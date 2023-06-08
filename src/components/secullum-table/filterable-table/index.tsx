import * as React from 'react';
import Filters from './filters';
import Table from './table';
import { SecullumList } from '../../../interfaces/table-data';
export interface IFilterableTableProps {
  tableData: SecullumList;
  setTableData: React.Dispatch<React.SetStateAction<SecullumList>>;
}

export default function FilterableTable ({tableData, setTableData}: IFilterableTableProps) {
  return (
    <>
      <Filters></Filters>
      <Table tableData={tableData}></Table>
    </>
  );
}
