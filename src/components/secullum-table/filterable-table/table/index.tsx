import * as React from 'react';
import Row from './row';
import { SecullumList } from '../../../../interfaces/table-data';
import { TableFilters } from '..';

export interface TableProps {
  tableData: SecullumList;
  filters: TableFilters
}

export default function Table({ tableData, filters }: TableProps) {
  const list = tableData.lista;
  return (
    <>
      <table className={`w-[100%] rounded-xl border-2 shadow-lg`}>
        <tr>
          <th>Data</th>
          <th>Dia da Semana</th>
          <th>Entrada 1</th>
          <th>Saída 1</th>
          <th>Entrada 2</th>
          <th>Saída 2</th>
          <th>Entrada 3</th>
          <th>Saída 3</th>
          <th>Total</th>
        </tr>
        {list && list !== undefined ? (
          list.map((item, id) => (
            <tr key={id} className={`border-y-2 border-x-gray-400 text-sm ${id % 2 === 0 ? `bg-neutral-900` : `bg-neutral-700`} hover:bg-slate-400 transition-colors duration-300`}>
              <Row id={id} item={item}></Row>
            </tr>
          ))
        ) : (
          <></>
        )}
      </table>
    </>
  );
}
