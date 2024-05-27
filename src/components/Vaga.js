// src/components/Vaga.js
import React from 'react';
import styled from 'styled-components';

const VagaWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
`;

const VagaTitulo = styled.h3`
  margin-bottom: 0.5rem;
`;

const VagaDescricao = styled.p`
  margin-bottom: 0.5rem;
`;

const Vaga = ({ titulo, descricao }) => (
  <VagaWrapper>
    <VagaTitulo>{titulo}</VagaTitulo>
    <VagaDescricao>{descricao}</VagaDescricao>
  </VagaWrapper>
);

export default Vaga;
