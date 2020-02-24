/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Form, Input } from '@rocketseat/unform';

import { toast } from 'react-toastify';

import { format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import { pt } from 'date-fns/esm/locale';

import { Link } from 'react-router-dom';
import { FaChevronCircleDown } from 'react-icons/fa';

import VerticalCenteredModal from '../../components/VerticalCentredModal';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Content from '../../components/Content';
import CollaboratorSelect from '../../components/CollaboratorSelect';

import api from '../../services/api';
import history from '../../services/history';

export default function Rooms() {
  const [rooms, setRooms] = useState([]);

  const [modalShow, setModalShow] = React.useState(false);

  const [hasComputer, setHasComputer] = useState(false);
  const [hasProjector, setHasProjector] = useState(false);
  const [hasVideoChat, setHasVideoChat] = useState(false);

  const [roomId, setRoomId] = useState();
  const [collaboratorId, setCollaboratorId] = useState();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [changeStatus, setChangeStatus] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/room');
      setRooms(data);
    })();
  }, [changeStatus]);

  async function handleDelete(id) {
    // eslint-disable-next-line no-alert
    const resp = window.confirm('Deseja realmente remover esta sala?');
    if (resp) {
      try {
        await api.delete(`/room/${id}`);
        toast.success('Collaborador removido com sucesso!');
        setChangeStatus(!changeStatus);
      } catch (error) {
        toast.error('Falha na autenticação, verifique os dados eviados!');
      }
    }
  }

  async function handleSearch(data) {
    const { has_computer, has_projector, has_video_chat } = data;
    const resp = await api.get('/room', {
      params: {
        has_computer,
        has_projector,
        has_video_chat,
      },
    });
    setRooms(resp.data);
  }

  function handleUserSelect(data) {
    setCollaboratorId(data.target.value);
  }

  function handleOpenModal(id) {
    setModalShow(true);
    setRoomId(id);
  }

  async function handleAppointment() {
    try {
      await api.post('/appointment', {
        date_start: format(startDate, 'yyyy-MM-dd H:mm', { locale: pt }),
        date_end: format(endDate, 'yyyy-MM-dd H:mm', { locale: pt }),
        collaborator_id: collaboratorId,
        room_id: roomId,
      });
      toast.success('Agendamento realizado com sucesso!');
      history.push('/appointments');
    } catch (error) {
      toast.error('Erro na validação dos dados. Tente novamente.');
    }
  }

  return (
    <Container>
      <Header>
        <h1 className="font-weight-bold">Salas</h1>
        <Button
          className="font-weight-bold"
          variant="primary"
          type="submit"
          onClick={() => history.push(`/rooms/add`)}
        >
          Adicionar
        </Button>
      </Header>

      <Content>
        <Form className="p-4" id="AppintmentForm" onSubmit={handleSearch}>
          <Row className="p-2">
            <Col xs={3}>
              <div className="form-group">
                <label className="form-label"> Cadeiras</label>
                <Input
                  type="number"
                  className="form-control"
                  id="qtd_chairs"
                  name="qtd_chairs"
                  placeholder="Quantidade de cadeiras"
                />
              </div>
            </Col>
            <Col>
              <div className="form-group">
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pt}>
                  <Row>
                    <Col>
                      <label className="form-label">Data/Hora Inicial</label>
                      <DateTimePicker
                        className="d-block"
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
                        className="d-block"
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
                  </Row>
                </MuiPickersUtilsProvider>
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
                    value={hasComputer}
                    checked={hasComputer}
                    onChange={() => setHasComputer(!hasComputer)}
                  />
                  <label className="form-label">Possui computador</label>
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="has_projector"
                    name="has_projector"
                    value={hasProjector}
                    checked={hasProjector}
                    onChange={() => setHasProjector(!hasProjector)}
                  />
                  <label className="form-label">Possui projetor</label>
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="has_video_chat"
                    name="has_video_chat"
                    value={hasVideoChat}
                    checked={hasVideoChat}
                    onChange={() => setHasVideoChat(!hasVideoChat)}
                  />
                  <label className="form-label">Possui video chamada</label>
                </div>
              </div>
            </Col>
          </Row>
          <Button
            form="AppintmentForm"
            className="font-weight-bold btn"
            variant="primary"
            type="submit"
          >
            Filtrar Salas
          </Button>
        </Form>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Qntd. Cadeiras</th>
                <th scope="col">Computador?</th>
                <th scope="col">Projetor?</th>
                <th scope="col">Video Chat?</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map(item => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.qntd_chairs}</td>
                  <td>
                    {item.has_computer ? (
                      <FaChevronCircleDown color="green" />
                    ) : (
                      <FaChevronCircleDown color="#ccc" />
                    )}
                  </td>
                  <td>
                    {item.has_projector ? (
                      <FaChevronCircleDown color="green" />
                    ) : (
                      <FaChevronCircleDown color="#ccc" />
                    )}
                  </td>
                  <td>
                    {item.has_video_chat ? (
                      <FaChevronCircleDown color="green" />
                    ) : (
                      <FaChevronCircleDown color="#ccc" />
                    )}
                  </td>

                  <td className="d-flex justify-content-between">
                    <Button
                      variant="link"
                      className="text-warning table-button"
                      onClick={() => handleOpenModal(item.id)}
                    >
                      Agendar
                    </Button>
                    <Link
                      to={{
                        pathname: `/rooms/edit/${item.id}`,
                        state: item,
                      }}
                    >
                      Editar
                    </Link>
                    <Button
                      variant="link"
                      className="text-danger table-button"
                      onClick={() => handleDelete(item.id)}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <VerticalCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          onSubmit={() => handleAppointment()}
          title="Selecione o colaborador responsável pelo agendamento"
          content={<CollaboratorSelect onChange={handleUserSelect} />}
        />
      </Content>
    </Container>
  );
}
