import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }
`;

const SkinImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const SkinInfo = styled.div`
  margin-top: 1rem;
`;

const SkinPrice = styled.div`
  font-size: 1.2rem;
  color: #4CAF50;
  font-weight: bold;
`;

const SkinCard = ({ skin }) => {
  return (
    <Card>
      <SkinImage src={skin.imageUrl} alt={skin.name} />
      <SkinInfo>
        <h3>{skin.name}</h3>
        <p>{skin.wear}</p>
        <SkinPrice>${skin.price}</SkinPrice>
      </SkinInfo>
    </Card>
  );
};

export default SkinCard; 