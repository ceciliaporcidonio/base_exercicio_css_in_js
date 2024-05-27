// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  background-image: url('/path/to/your/image.jpg');
  background-size: cover;
  background-position: center;
  padding: 5rem 1rem;
  color: white;
  text-align: center;
`;

const Hero = () => (
  <HeroWrapper>
    <h1>Bem-vindo ao Meu Projeto</h1>
    <p>Essa é uma breve descrição do projeto.</p>
  </HeroWrapper>
);

export default Hero;
