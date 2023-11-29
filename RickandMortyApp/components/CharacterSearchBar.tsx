import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';

interface SearchBarProps {
  onSearch: (search: string) => void;
}

export const CharacterSearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <input></input>
  );
};