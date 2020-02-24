/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useEffect } from 'react';

import { format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import { pt } from 'date-fns/esm/locale';

import { Button, Row, Col } from 'react-bootstrap';

import { Form } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import Container from '../Container';
import Content from '../Content';
import Header from '../Header';

import history from '../../services/history';

import api from '../../services/api';

import SelectCollaborators from '../CollaboratorSelect/select';
import SelectRooms from '../RoomSelect/select';

export default function AppointmentForm({
  action,
  id,
  roomId,
  collaboratorId,
  startDate,
  endDate,
}) {
  const [start_date, setStart_Date] = useState(new Date());
  const [end_date, setEnd_Date] = useState(new Date());

  const [roomID, setRoomID] = useState(roomId);
  const [collaboratorID, setCollaboratorID] = useState(collaboratorId);

  useEffect(() => {
    setStart_Date(startDate);
    setEnd_Date(endDate);
  }, [endDate, startDate]);

  async function handleSubmit() {
    try {
      const data = {
        date_start:
          start_date !== startDate
            ? format(start_date, 'yyyy-MM-dd H:mm', { locale: pt })
            : startDate,
        date_end:
          end_date !== endDate
            ? format(end_date, 'yyyy-MM-dd H:mm', { locale: pt })
            : endDate,
        collaborator_id: collaboratorID,
        room_id: roomID,
      };
      if (action === 'Adicionar') {
        await api.post('/appointment', data);
      } else {
        await api.put(`/appointment/${id}`, data);
      }
      toast.success('Agendamento realizado com sucesso!');
      history.push('/appointments');
    } catch (error) {
      toast.error('Erro na validação dos dados. Tente novamente.');
    }
  }

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
        <Form className="p-4" id="updateAppointment" onSubmit={handleSubmit}>
          <Row>
            <Col>
              <div className="form-group">
                <label className="form-label">Colaborador</label>
                <SelectCollaborators
                  className="form-control"
                  id="collaborator"
                  name="collaborator"
                  value={collaboratorID}
                  onChange={data => setCollaboratorID(data.target.value)}
                />
              </div>
            </Col>
            <Col>
              <div className="form-group">
                <label className="form-label">Sala</label>
                <SelectRooms
                  className="form-control"
                  id="room"
                  name="room"
                  value={roomID}
                  onChange={data => setRoomID(data.target.value)}
                />
              </div>
            </Col>
            <div className="form-group">
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pt}>
                <Row>
                  <Col>
                    <label className="form-label">Data/Hora Inicial</label>
                    <DateTimePicker
                      className="d-block"
                      value={start_date}
                      onChange={setStart_Date}
                      ampm={false}
                      disablePast
                      minutesStep={0}
                      format="dd'/'MM'/'yyyy 'às' H:mm"
                    />
                  </Col>
                  <Col>
                    <label className="form-label">Data/Hora Final</label>
                    <DateTimePicker
                      className="d-block"
                      value={end_date}
                      onChange={setEnd_Date}
                      ampm={false}
                      disablePast
                      format="dd'/'MM'/'yyyy 'às' H:mm"
                      minDate={start_date}
                      minDateMessage="A data final não pode ser inferior a data inicial"
                      minutesStep={0}
                    />
                  </Col>
                </Row>
              </MuiPickersUtilsProvider>
            </div>
          </Row>
          <Button
            form="updateAppointment"
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
