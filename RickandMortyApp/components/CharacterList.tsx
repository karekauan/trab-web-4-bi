// components/CharacterList.tsx
import React from 'react';
import { FlatList } from 'react-native';
import { Character } from './Character';

interface CharacterListProps {
  characters: Array<{
    id: number;
    name: string;
    image: string;
    status: string;
  }>;
}

export const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <FlatList
      data={characters}
      renderItem={({ item }) => (
        <Character name={item.name} image={item.image} status={item.status} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};