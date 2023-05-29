import * as React from 'react';
import { SecullumList } from '../../../../interfaces/table-data';

export interface TableProps {
  tableData: SecullumList;
}

export default function Table({ tableData }: TableProps) {
  const list = tableData.lista;
  const mappedList = list.map((item) => {
    const id = item.id;
    const date = item.data;
    const batidas = item.batidas;
  });
  const total = ''
  return (
    <>
      <table className={`w-[100%] rounded-xl shadow-lg`}>
        <tr>
          <th>Data</th>
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
            <tr key={id} className={`border-y-2 border-x-gray-400`}>
              <td className={`text-center ${id % 2 === 0 ? `bg-neutral-900` : `bg-neutral-700`}`}>
                {JSON.stringify(item.data)}
              </td>
              <td className={`text-center ${id % 2 === 0 ? `bg-neutral-900` : `bg-neutral-700`}`}>
                {item.batidas[0].valor}
              </td>
              <td className={`text-center ${id % 2 === 0 ? `bg-neutral-900` : `bg-neutral-700`}`}>
                {item.batidas[1].valor}
              </td>
              <td className={`text-center ${id % 2 === 0 ? `bg-neutral-900` : `bg-neutral-700`}`}>
                {item.batidas[2].valor}
              </td>
              <td className={`text-center ${id % 2 === 0 ? `bg-neutral-900` : `bg-neutral-700`}`}>
                {item.batidas[3].valor}
              </td>
              <td className={`text-center ${id % 2 === 0 ? `bg-neutral-900` : `bg-neutral-700`}`}>
                {item.batidas[4].valor}
              </td>
              <td className={`text-center ${id % 2 === 0 ? `bg-neutral-900` : `bg-neutral-700`}`}>
                {item.batidas[5].valor}
              </td>
              <td className={`text-center ${id % 2 === 0 ? `bg-neutral-900` : `bg-neutral-700`}`}>
                {total}
              </td>
            </tr>
          ))
        ) : (
          <></>
        )}
      </table>
    </>
  );
}
