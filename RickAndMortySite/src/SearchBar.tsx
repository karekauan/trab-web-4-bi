import React, { useState } from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SearchInput = styled.input`
  margin-top: 10px;
  margin-right: 5px;
  width: 200px;
`;

const Button = styled.button`
  background-color: #a8ff78; // Light Green
  color: #333;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <SearchBarContainer>
        <SearchInput
            type="text"
            placeholder="Buscar Personagem"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit">Buscar</Button>
      </SearchBarContainer>
    </form>
  );
};

export default SearchBar;