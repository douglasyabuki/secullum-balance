import React, { useState } from 'react';
import Filters from './filters';
import Table from './table';
import { SecullumList } from '../../../interfaces/table-data';
interface FilterableTableProps {
  tableData: SecullumList;
}

export interface TableFilters {
  day: string;
  weekday: string;
}

const initialFilters: TableFilters = {
  day: '',
  weekday: ''
}

export default function FilterableTable({ tableData }: FilterableTableProps) {
  const [filters, setFilters] = useState<TableFilters>(initialFilters);
  return (
    <>
      <Filters filters={filters} setFilters={setFilters}></Filters>
      <Table tableData={tableData} filters={filters}></Table>
    </>
  );
}
