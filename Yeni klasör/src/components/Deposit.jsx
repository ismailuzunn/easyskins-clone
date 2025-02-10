import React, { useState } from 'react';
import styled from 'styled-components';

const DepositContainer = styled.div`
  padding: 2rem;
  color: white;
  max-width: 600px;
  margin: 0 auto;
`;

const PaymentMethod = styled.div`
  background: #2a2a2a;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  cursor: pointer;
  border: 1px solid ${props => props.selected ? '#4CAF50' : '#3a3a3a'};
`;

const AmountInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  color: white;
  border-radius: 4px;
  margin: 1rem 0;
`;

const DepositButton = styled.button`
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

const Deposit = () => {
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');

  return (
    <DepositContainer>
      <h2>Para Yatır</h2>
      <PaymentMethod 
        selected={selectedMethod === 'card'}
        onClick={() => setSelectedMethod('card')}
      >
        Kredi/Banka Kartı
      </PaymentMethod>
      <PaymentMethod 
        selected={selectedMethod === 'crypto'}
        onClick={() => setSelectedMethod('crypto')}
      >
        Kripto Para
      </PaymentMethod>
      <AmountInput
        type="number"
        placeholder="Miktar giriniz"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <DepositButton>Para Yatır</DepositButton>
    </DepositContainer>
  );
};

export default Deposit; 