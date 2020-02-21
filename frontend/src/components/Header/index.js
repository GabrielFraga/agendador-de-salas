import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { HeaderStyle } from './styles';

export default function Header({ children }) {
  return (
    <HeaderStyle>
      <Container>
        <Row>{children}</Row>
      </Container>
    </HeaderStyle>
  );
}
