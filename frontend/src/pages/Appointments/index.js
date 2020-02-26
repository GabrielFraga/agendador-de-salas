import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Content from '../../components/Content';

import api from '../../services/api';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [changeStatus, setChangeStatus] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/appointment');
      const appointment = data.map(ap => ({
        ...ap,
        start_date_formated: format(
          parseISO(ap.date_start),
          "dd'/'MM'/'yyyy 'às' H:mm",
          {
            locale: pt,
          }
        ),
        end_date_formated: format(
          parseISO(ap.date_end),
          "dd'/'MM'/'yyyy 'às' H:mm",
          {
            locale: pt,
          }
        ),
      }));
      setAppointments(appointment);
    })();
  }, [changeStatus]);

  async function handleDelete(id) {
    // eslint-disable-next-line no-alert
    const resp = window.confirm('Deseja realmente remover este agendamento?');
    if (resp) {
      try {
        await api.delete(`/appointment/${id}`);
        toast.success('Agendamento removido com sucesso!');
        setChangeStatus(!changeStatus);
      } catch (error) {
        toast.error('Falha na autenticação, verifique os dados eviados!');
      }
    }
  }

  return (
    <Container>
      <Header>
        <h1 className="font-weight-bold">Agendamentos</h1>
      </Header>
      <Content>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Colaborador</th>
                <th scope="col">Sala</th>
                <th scope="col">Data/Hora inicial</th>
                <th scope="col">Data/Hora final</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(item => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.collaborator_name}</td>
                  <td>{item.room_name}</td>
                  <td>{item.start_date_formated}</td>
                  <td>{item.end_date_formated}</td>
                  <td className="d-flex justify-content-between">
                    <Link
                      to={{
                        pathname: `/appointments/edit/${item.id}`,
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
      </Content>
    </Container>
  );
}
