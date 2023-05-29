import * as React from 'react';
import { SecullumList } from '../../../interfaces/table-data';

export interface IInputJsonProps {
  tableData: SecullumList;
  setTableData: React.Dispatch<React.SetStateAction<SecullumList>>;
}

export default function InputJson({ tableData, setTableData }: IInputJsonProps) {
  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const clipboardData = event.clipboardData;
    if (clipboardData) {
      const pastedText = clipboardData.getData('text');
      const newTableData = transformPastedData(pastedText);
      if (newTableData) {
        setTableData(newTableData);
      }
    }
  };

  const transformPastedData = (pastedText: string) => {
    try {
      const parsedData = JSON.parse(pastedText);
      const serializedTableData = JSON.stringify(tableData);
      const serializedParsedData = JSON.stringify(parsedData);

      if (serializedParsedData === serializedTableData) {
        return parsedData;
      }

      console.log('Invalid data structure');
      return null;
    } catch (error) {
      console.error('Error parsing pasted data:', error);
      return null;
    }
  };

  return (
    <div className='text-black'>
      <input type="text" className="p-2 text-xs w-[100%] border-2 border-black" onPaste={handlePaste} />
    </div>
  );
}
