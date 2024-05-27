
// src/components/Formulario.js
import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 5px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Formulario = () => (
  <FormWrapper>
    <Input type="text" placeholder="Nome" />
    <Input type="email" placeholder="Email" />
    <Button type="submit">Enviar</Button>
  </FormWrapper>
);

export default Formulario;
