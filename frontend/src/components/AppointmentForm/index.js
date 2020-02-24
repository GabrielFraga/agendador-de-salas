/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';

import * as Yup from 'yup';

import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import { pt } from 'date-fns/esm/locale';

import { Button, Row, Col } from 'react-bootstrap';

import { Form, Input } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import Container from '../Container';
import Content from '../Content';
import Header from '../Header';

import history from '../../services/history';

import api from '../../services/api';

export default function AppointmentForm({ action }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
          <Row className="justify-content-between p-2">
            <Col>
              <div className="form-group">
                <label className="form-lavel"> Cadeiras</label>
                <Input
                  className="form-control"
                  id="qtd_chairs"
                  name="qtd_chairs"
                  placeholder="Quantidade de cadeiras"
                />
              </div>
            </Col>
            <Col>
              <div className="form-group">
                {/* <label className="form-label">Data de Início</label> */}
                {/* <div className="input-group date" id="datetimepicker2">
                  <input type="time" className="form-control" />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar" />
                  </span>
                </div> */}
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pt}>
                  <Row>
                    <Col>
                      <label className="form-label">Data/Hora Inicial</label>
                      <DateTimePicker
                        value={startDate}
                        onChange={setStartDate}
                        ampm={false}
                        disablePast
                        minutesStep={0}
                        format="dd'/'MM'/'yyyy 'às' H:mm"
                      />
                    </Col>
                    <Col>
                      <label className="form-label">Data/Hora Final</label>
                      <DateTimePicker
                        value={endDate}
                        onChange={setEndDate}
                        ampm={false}
                        disablePast
                        format="dd'/'MM'/'yyyy 'às' H:mm"
                        minDate={startDate}
                        minDateMessage="A data final não pode ser inferior a data inicial"
                        minutesStep={0}
                      />
                    </Col>
                    {/* <Col>
                      <label className="form-label">Hora Final</label>
                      <TimePicker
                        value={selectedDate}
                        onChange={handleDateChange}
                      />
                    </Col> */}
                  </Row>
                </MuiPickersUtilsProvider>
              </div>
            </Col>
            {/* <Col>
              <div className="form-group">
                <label className="form-label">Data Final</label>
                <Input className="form-control" id="date_end" name="date_end" />
              </div>
            </Col> */}
          </Row>
          <Row className="p-2">
            <Col>
              <div className="form-group">
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="collaborator_id"
                    name="collaborator_id"
                  />
                  <label className="form-label">Colaborador</label>
                </div>
              </div>
            </Col>
            <Col>
              <div className="form-group">
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="has_computer"
                    name="has_computer"
                  />
                  <label className="form-label">Possui computador</label>
                </div>
              </div>
            </Col>
            <Col>
              <div className="form-group">
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="has_projector"
                    name="has_projector"
                  />
                  <label className="form-label">Possui projetor</label>
                </div>
              </div>
            </Col>
            <Col>
              <div className="form-group">
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="has_video_chat"
                    name="has_video_chat"
                  />
                  <label className="form-label">Possui video chamada</label>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </Content>
    </Container>
  );
}
