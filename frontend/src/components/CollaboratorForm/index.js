import React, { useState } from 'react';

import * as Yup from 'yup';

import { Button } from 'react-bootstrap';

import { Form, Input } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import Container from '../Container';
import Content from '../Content';
import Header from '../Header';

import history from '../../services/history';

import api from '../../services/api';
// import { Container } from './styles';

export default function CollaboratorForm({
  action,
  userId,
  userName,
  userEmail,
  userPhone,
}) {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Campo obrigatório'),
    name: Yup.string().required('Campo obrigatório'),
    phone: Yup.number().typeError('Informe um telefone válido'),
  });

  async function handleSubmit(data) {
    try {
      if (action === 'Adicionar') {
        await api.post('/collaborator', data);
      } else {
        await api.put(`/collaborator/${userId}`, data);
      }
      toast.success('Colaborador salvo com sucesso');
      history.push('/');
    } catch (error) {
      toast.error('Erro na validação dos dados. Tente novamente');
    }
  }

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
          schema={schema}
          id="updateCollaborator"
          className="p-4"
          onSubmit={handleSubmit}
          initialData={{
            name: userName,
            email: userEmail,
            phone: userPhone,
          }}
        >
          <div className="form-group">
            <label className="form-label">Nome</label>
            <Input
              className="form-control"
              id="name"
              name="name"
              placeholder="Digite o nome do colaborador"
            />
          </div>
          <div className="form-group">
            <label className="form-label">E-mail</label>
            <Input
              className="form-control"
              id="email"
              name="email"
              placeholder="Digite o e-mail do colaborador"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Telefone</label>
            <Input
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Digite o telefone"
            />
          </div>
          <Button
            form="updateCollaborator"
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
