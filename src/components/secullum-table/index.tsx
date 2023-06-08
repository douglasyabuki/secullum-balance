import React, { useState } from 'react';
import InputJson from './input-json';
import FilterableTable from './filterable-table';
import { SecullumList } from '../../interfaces/table-data';
import data from '../../data/data.json';

const dataToConst: SecullumList = JSON.parse(JSON.stringify(data));

export default function SecullumTable() {
  const [tableData, setTableData] = useState<SecullumList>(dataToConst);

  return (
    <div className="text-2xl text-neutral-200 p-16 h-auto mt-16 w-screen space-y-8">
      <InputJson tableData={tableData} setTableData={setTableData}></InputJson>
      <FilterableTable tableData={tableData} setTableData={setTableData}></FilterableTable>
    </div>
  );
}
