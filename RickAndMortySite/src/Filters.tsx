import React from 'react';

interface FiltersProps {
  onChange: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onChange }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="Alive"
          onChange={handleFilterChange}
        />
        ❤️
      </label>
      <label>
        <input
          type="checkbox"
          value="Dead"
          onChange={handleFilterChange}
        />
        🪦
      </label>
      <label>
        <input
          type="checkbox"
          value="unknown"
          onChange={handleFilterChange}
        />
        ❓
      </label>
    </div>
  );
};

export default Filters;