import { useState } from 'react';
import CharacterList from './CharacterList';
import SearchBar from './SearchBar';
import Reset from './Reset';
import Filters from './Filters';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (status: string) => {
    setFilter(status);
  };

  return (
    <div className="App">
      <Reset />
      <SearchBar onSearch={handleSearch} />
      <Filters onChange={handleFilterChange} />
      <CharacterList searchTerm={searchTerm} filter={filter} />
    </div>
  );
}

export default App;