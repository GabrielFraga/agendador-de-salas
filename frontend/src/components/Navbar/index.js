import React from 'react';

import { Nav } from 'react-bootstrap';
import { NavStyles } from './styles';

export default function Header() {
  return (
    <NavStyles>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Colaboradores</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Rooms">Salas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/appointments">Agendamentos</Nav.Link>
        </Nav.Item>
      </Nav>
    </NavStyles>

    // <Container>
    //   <Content>
    //     <nav>
    //       <Link to="/students">Agendador</Link>
    //     </nav>
    //     <Routes>
    //       <Link to="/collaborators">Colaboradores</Link>
    //       <Link to="/rooms">Salas</Link>
    //       <Link to="/appointments">Agendamentos</Link>
    //     </Routes>
    //   </Content>
    // </Container>
  );
}
