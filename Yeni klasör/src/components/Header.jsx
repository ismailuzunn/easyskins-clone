import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #2a2a2a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3a3a3a;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">EasySkins</Logo>
      <Nav>
        <NavLink to="/market">Market</NavLink>
        <NavLink to="/inventory">Envanter</NavLink>
        <NavLink to="/deposit">Para Yatır</NavLink>
        <NavLink to="/withdraw">Para Çek</NavLink>
        <NavLink to="/login">Giriş Yap</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 