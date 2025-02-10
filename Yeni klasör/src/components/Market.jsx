import React, { useState } from 'react';
import styled from 'styled-components';
import SkinCard from './SkinCard';

const MarketContainer = styled.div`
  padding: 2rem;
  color: white;
`;

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterInput = styled.input`
  padding: 0.5rem;
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  color: white;
  border-radius: 4px;
`;

const SkinsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const Market = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Örnek skin verileri
  const skins = [
    {
      id: 1,
      name: 'AK-47 | Asiimov',
      wear: 'Factory New',
      price: 150.50,
      imageUrl: 'https://example.com/ak47-asiimov.png'
    },
    // Diğer skinler buraya eklenecek
  ];

  return (
    <MarketContainer>
      <FilterSection>
        <FilterInput 
          type="text" 
          placeholder="Skin ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </FilterSection>
      <SkinsGrid>
        {skins.map(skin => (
          <SkinCard key={skin.id} skin={skin} />
        ))}
      </SkinsGrid>
    </MarketContainer>
  );
};

export default Market; 