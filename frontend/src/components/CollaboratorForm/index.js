import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import { toast } from 'react-toastify';
import Container from '../Container';
import Content from '../Content';
import Header from '../Header';

import history from '../../services/history';

import api from '../../services/api';
// import { Container } from './styles';

export default function CollaboratorForm({
  action,
  userName,
  userEmail,
  userPhone,
}) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      event.stopPropagation();

      // console.log(event.target);
      // (async () => {
      //   await api.post('/collaborators', {
      //     form,
      //   });
      // })();
    }
  };

  return (
    <Container>
      <Header>
        <h1 className="font-weight-bold">{action} Colaborador</h1>
        <Button
          className="font-weight-bold"
          onClick={() => history.goBack()}
          variant="secondary"
          type="submit"
        >
          Voltar
        </Button>
      </Header>
      <Content>
        <Form
          className="p-4"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="validationCustom01">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nome"
              defaultValue={userName}
            />
            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Por favor, informe o nome
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Endereço de e-mail</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Insira seu e-mail"
              defaultValue={userEmail}
            />
            <Form.Text className="text-muted"></Form.Text>
            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Por favor, informe um e-mail válido
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="phone"
              defaultValue={userPhone}
              placeholder="Insira seu telefone"
            />
          </Form.Group>
          <Button
            className="font-weight-bold btn"
            variant="primary"
            type="submit"
          >
            Confirmar
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
