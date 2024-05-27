// src/components/ListaVagas.js
import React from 'react';
import styled from 'styled-components';
import Vaga from './Vaga';

const ListaVagasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListaVagas = ({ vagas }) => (
  <ListaVagasWrapper>
    {vagas.map((vaga, index) => (
      <Vaga key={index} titulo={vaga.titulo} descricao={vaga.descricao} />
    ))}
  </ListaVagasWrapper>
);

export default ListaVagas;
