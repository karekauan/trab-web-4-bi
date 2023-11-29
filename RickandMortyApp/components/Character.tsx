import React from 'react';
import { View, Text, Image } from 'react-native';

interface CharacterProps {
  name: string;
  image: string;
  status: string;
}

export const Character: React.FC<CharacterProps> = ({ name, image, status }) => {
  return (
    <View style={{ alignItems: 'center', padding: 20 }}>
      <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
      <Text>{name}</Text>
      <Text>{status}</Text>
    </View>
  );
};