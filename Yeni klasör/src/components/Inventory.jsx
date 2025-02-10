import React from 'react';
import styled from 'styled-components';
import SkinCard from './SkinCard';

const InventoryContainer = styled.div`
  padding: 2rem;
  color: white;
`;

const InventoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const InventoryValue = styled.div`
  font-size: 1.2rem;
  color: #4CAF50;
`;

const SkinsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const Inventory = () => {
  const inventoryItems = [
    // Örnek envanter itemları
  ];

  return (
    <InventoryContainer>
      <InventoryHeader>
        <h2>Envanterim</h2>
        <InventoryValue>Toplam Değer: $1,234.56</InventoryValue>
      </InventoryHeader>
      <SkinsGrid>
        {inventoryItems.map(item => (
          <SkinCard key={item.id} skin={item} />
        ))}
      </SkinsGrid>
    </InventoryContainer>
  );
};

export default Inventory; 