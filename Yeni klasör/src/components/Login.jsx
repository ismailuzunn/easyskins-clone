import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  padding: 2rem;
  color: white;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const SteamButton = styled.button`
  background: #171a21;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;

  &:hover {
    background: #1b2838;
  }
`;

const Login = () => {
  const handleSteamLogin = () => {
    // Steam login işlemi burada yapılacak
  };

  return (
    <LoginContainer>
      <h2>Giriş Yap</h2>
      <SteamButton onClick={handleSteamLogin}>
        <img src="/steam-icon.png" alt="Steam" width="24" height="24" />
        Steam ile Giriş Yap
      </SteamButton>
    </LoginContainer>
  );
};

export default Login; 