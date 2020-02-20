import React from 'react';
import { Row } from 'react-bootstrap';
import { HeaderStyle } from './styles';

export default function Header({ children }) {
  return (
    <HeaderStyle>
      <Row>{children}</Row>
    </HeaderStyle>
  );
}
