import React from 'react';

import * as Yup from 'yup';

import { Button, Row } from 'react-bootstrap';

import { Form, Input } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import Container from '../Container';
import Content from '../Content';
import Header from '../Header';

import history from '../../services/history';

import api from '../../services/api';

export default function AppointmentForm({ action }) {
  return (
    <Container>
      <Header>
        <h1 className="font-weight-bold">{action} Agendamento</h1>
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
        <Form className="p-4">
          <Row>
            <div className="form-group">
              <label className="form-lavel"> Cadeiras</label>
              <Input
                className="form-control"
                id="qtd_chairs"
                name="qtd_chairs"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Data de Início</label>
              <Input
                className="form-control"
                id="date_start"
                name="date_start"
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Data Final
              </label>
              <Input className="form-control" id="date_end" name="date_end" />
            </div>
          </Row>
          <div className="form-group">
            <div className="form-check">
              <Input
                className="form-control"
                id="collaborator_id"
                name="collaborator_id"
              />
            </div>
            <label htmlFor="" className="form-label">
              Colaborador
            </label>
          </div>
          <div className="form-group">
            <div className="form-check">
              <Input
                className="form-control"
                type="checkbox"
                id="has_computer"
                name="has_computer"
              />
            </div>
            <label htmlFor="" className="form-label">
              Possui computador
            </label>
          </div>
          <div className="form-group">
            <div className="form-check">
              <Input
                className="form-control"
                type="checkbox"
                id="has_projector"
                name="has_projector"
              />
            </div>
            <label htmlFor="" className="form-label">
              Possui projetor
            </label>
          </div>
          <div className="form-group">
            <Input
              className="form-control"
              type="checkbox"
              id="has_video_chat"
              name="has_video_chat"
            />
          </div>
          <label htmlFor="" className="form-label">
            Possui vide chamada
          </label>
          <div className="form-check" />
        </Form>
      </Content>
    </Container>
  );
}
