import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../Navbar';
import { ContainerStyle } from './styles';

export default function Body({ children }) {
  return (
    <>
      <ContainerStyle>
        <Container>
          <Navbar />
          {children}
        </Container>
      </ContainerStyle>
    </>
  );
}
