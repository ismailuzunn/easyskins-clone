import React, { useState } from 'react';
import styled from 'styled-components';

const WithdrawContainer = styled.div`
  padding: 2rem;
  color: white;
  max-width: 600px;
  margin: 0 auto;
`;

const WithdrawMethod = styled.div`
  background: #2a2a2a;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  cursor: pointer;
  border: 1px solid ${props => props.selected ? '#4CAF50' : '#3a3a3a'};
`;

const WithdrawInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  color: white;
  border-radius: 4px;
  margin: 1rem 0;
`;

const WithdrawButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    background: #45a049;
  }
`;

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [address, setAddress] = useState('');

  return (
    <WithdrawContainer>
      <h2>Para Çek</h2>
      <WithdrawMethod 
        selected={selectedMethod === 'bank'}
        onClick={() => setSelectedMethod('bank')}
      >
        Banka Hesabı
      </WithdrawMethod>
      <WithdrawMethod 
        selected={selectedMethod === 'crypto'}
        onClick={() => setSelectedMethod('crypto')}
      >
        Kripto Para
      </WithdrawMethod>
      <WithdrawInput
        type="number"
        placeholder="Miktar giriniz"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <WithdrawInput
        type="text"
        placeholder="Çekim adresi"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <WithdrawButton>Para Çek</WithdrawButton>
    </WithdrawContainer>
  );
};

export default Withdraw; 