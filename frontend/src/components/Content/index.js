import React from 'react';

import { Container } from './styles';

export default function Content({ children }) {
  return <Container className="card p-2 mt-4">{children}</Container>;
}
