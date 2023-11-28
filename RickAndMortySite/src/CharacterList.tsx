import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Character from './Character';

interface CharacterData {
  name: string;
  image: string;
  status: string;
}

interface CharacterListProps {
  searchTerm: string;
  filter: string;
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #202020; // Dark Gray
  padding: 20px;
  border-radius: 5px;
  color: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #a8ff78; // Light Green
  color: #333;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ddd;
    color: #999;
    cursor: not-allowed;
  }
`;

const CharacterList: React.FC<CharacterListProps> = ({ searchTerm, filter }) => {
  const [data, setData] = useState<CharacterData[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character?page=${page}`;
    if (searchTerm) {
      url += `&name=${searchTerm}`;
    }
    if (filter) {
      url += `&status=${filter}`;
    }

    axios
      .get(url)
      .then((response) => setData(response.data.results))
      .catch(() => setData([]));
  }, [page, searchTerm, filter]);

  const translateStatus = (status: string) => {
    switch (status) {
      case 'Alive':
        return 'Vivo ❤️';
      case 'Dead':
        return 'Morto 🪦';
      default:
        return 'Desconhecido ❓';
    }
  };

  return (
    <div>
      <List>
        {data.map((character) => (
            <Character
            key={character.name}
            name={character.name}
            image={character.image}
            status={translateStatus(character.status)}
            />
        ))}
      </List>
      <ButtonContainer>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>Anterior</Button>
        <Button onClick={() => setPage(page + 1)}>Próxima</Button>
      </ButtonContainer>
    </div>
  );
};

export default CharacterList;