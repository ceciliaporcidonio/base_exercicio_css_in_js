// src/components/ListaVagas.js
import styled from 'styled-components';
import Vaga from './Vaga';

const ListaVagasWrapper = styled.div`
  // Adicione seu CSS aqui
`;

const ListaVagas = ({ vagas }) => (
  <ListaVagasWrapper>
    {vagas.map((vaga, index) => (
      <Vaga key={index} vaga={vaga} />
    ))}
  </ListaVagasWrapper>
);

export default ListaVagas;
