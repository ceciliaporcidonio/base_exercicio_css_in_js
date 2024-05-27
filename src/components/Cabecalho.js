
// src/components/Cabecalho.js
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #282c34;
  padding: 1rem;
  color: white;
  text-align: center;
`;

const Cabecalho = () => (
  <HeaderWrapper>
    <h1>Meu Projeto</h1>
  </HeaderWrapper>
);

export default Cabecalho;
