import React, { useState, useEffect } from 'react';

import * as Yup from 'yup';

import { Button } from 'react-bootstrap';

import { Form, Input } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import Container from '../Container';
import Content from '../Content';
import Header from '../Header';

import history from '../../services/history';

import api from '../../services/api';

export default function RoomForm({
  action,
  roomId,
  name,
  qntd_chairs,
  has_computer,
  has_projector,
  has_video_chat,
}) {
  const [formBooleans, setFormBooleans] = useState({
    has_computer: false,
    has_projector: false,
    has_video_chat: false,
  });

  useEffect(() => {
    if (action === 'Editar') {
      setFormBooleans({ has_computer, has_projector, has_video_chat });
    }
  }, [action, has_computer, has_projector, has_video_chat]);

  const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    qntd_chairs: Yup.number()
      .required('Campo obrigatório')
      .typeError('Informe um número válido'),
    has_computer: Yup.boolean(),
    has_projector: Yup.boolean(),
    has_video_chat: Yup.boolean(),
  });

  async function handleSubmit(data) {
    try {
      if (action === 'Adicionar') {
        await api.post('/room', data);
      } else {
        await api.put(`/room/${roomId}`, data);
      }
      toast.success('Sala salva com sucesso!');
      history.goBack();
    } catch (error) {
      toast.error('Erro na validação dos dados. Tente novamente');
    }
  }

  return (
    <Container>
      <Header>
        <h1 className="font-weight-bold">{action} Sala</h1>
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
          id="updateRoom"
          className="p-4"
          onSubmit={handleSubmit}
          initialData={{
            name,
            qntd_chairs,
          }}
        >
          <div className="form-group">
            <label className="form-label">Nome</label>
            <Input
              className="form-control"
              id="name"
              name="name"
              placeholder="Nome da sala"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Quantidade de cadeiras</label>
            <Input
              className="form-control"
              id="qntd_chairs"
              name="qntd_chairs"
              placeholder="Quantidade de cadeiras"
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <Input
                id="has_computer"
                className="form-check-input"
                name="has_computer"
                type="checkbox"
                value={formBooleans.has_computer}
                checked={formBooleans.has_computer}
                onChange={() =>
                  setFormBooleans(state => ({
                    ...state,
                    has_computer: !formBooleans.has_computer,
                  }))
                }
              />
              <label className="form-label">Possui computador?</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <Input
                className="form-check-input"
                name="has_projector"
                id="has_projector"
                type="checkbox"
                value={formBooleans.has_projector}
                checked={formBooleans.has_projector}
                onChange={() =>
                  setFormBooleans(state => ({
                    ...state,
                    has_projector: !formBooleans.has_projector,
                  }))
                }
              />
              <label className="form-label">Possui projetor?</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <Input
                className="form-check-input"
                name="has_video_chat"
                id="has_video_chat"
                type="checkbox"
                value={formBooleans.has_video_chat}
                checked={formBooleans.has_video_chat}
                onChange={() =>
                  setFormBooleans(state => ({
                    ...state,
                    has_video_chat: !formBooleans.has_video_chat,
                  }))
                }
              />
              <label className="form-label">Possui video conferência?</label>
            </div>
          </div>
          <Button
            form="updateRoom"
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
