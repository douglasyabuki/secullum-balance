import * as React from 'react';
import { TableFilters } from '..';
export interface FiltersProps {
  filters: TableFilters,
  setFilters: React.Dispatch<React.SetStateAction<TableFilters>>
}

export default function Filters ({filters, setFilters}: FiltersProps) {
  return (
    <div>

    </div>
  );
}
