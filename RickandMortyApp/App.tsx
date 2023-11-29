// App.tsx
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import axios from 'axios';
import { CharacterList } from './components/CharacterList';
import { CharacterSearchBar } from './components/CharacterSearchBar';
import { Filters } from './components/Filters';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [statuses, setStatuses] = useState(['Alive', 'Dead', 'unknown']);

  const fetchCharacters = async (status = '', name = '') => {
    let url = `https://rickandmortyapi.com/api/character/?name=${name}`;
    if (status) {
      url += `&status=${status}`;
    }
    const response = await axios.get(url);
    setCharacters(response.data.results);
  };

  useEffect(() => {
    fetchCharacters(selectedStatus, search);
  }, [selectedStatus, search]);

  return (
    <SafeAreaView style={styles.container}>
      <CharacterSearchBar onSearch={(value) => setSearch(value)} />
      <Filters
        statuses={statuses}
        onSelect={(status) => setSelectedStatus(status)}
      />
      <CharacterList characters={characters} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

export default App;