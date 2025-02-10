import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background-color: #1a1a1a;
  color: #ffffff;
`;

const HeroSection = styled.div`
  padding: 2rem;
  text-align: center;
`;

const SkinsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <h1>EasySkins</h1>
        <p>CS:GO Skinlerini Al ve Sat</p>
      </HeroSection>
      <SkinsGrid>
        {/* Skin kartları buraya gelecek */}
      </SkinsGrid>
    </HomeContainer>
  );
};

export default Home; 