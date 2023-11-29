// components/Filters.tsx
import React from 'react';
import { CheckBox } from 'react-native-elements';

interface FiltersProps {
  statuses: string[];
  onSelect: (status: string) => void;
}

export const Filters: React.FC<FiltersProps> = ({ statuses, onSelect }) => {
  return (
    <>
      {statuses.map((status) => (
        <CheckBox
          key={status}
          title={status}
          onPress={() => onSelect(status)}
        />
      ))}
    </>
  );
};