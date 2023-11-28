import React from 'react';
import styled from 'styled-components';

interface CharacterProps {
  name: string;
  image: string;
  status: string;
}

const Card = styled.div`
  width: 200px;
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #a8ff78; // Light Green
  color: #333;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Character: React.FC<CharacterProps> = ({ name, image, status }) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <h2>{name}</h2>
      <p><b>Status: </b>{status}</p>
    </Card>
  );
};

export default Character;